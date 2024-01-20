import { Adapter, AdapterSession, AdapterUser } from 'next-auth/adapters';
import { v4 as uuid4 } from 'uuid';
import _ from 'lodash';
import { nanoid } from 'nanoid';
import * as users from '@/lib/api/users';
import * as socialAccounts from '@/lib/api/social-accounts';
import * as sessions from '@/lib/api/sessions';
import { MyUserResponse, SocialAccountResponse } from '@/generated/graphql';

const toAdapterUser = (user: MyUserResponse) =>
  ({
    ...user,
    email: '',
    emailVerified: null,
  }) as AdapterUser;

const toAdapterUserOrNull = (user: MyUserResponse) => {
  if (!user) return null;
  return toAdapterUser(user);
};

export default function DatabaseAdapter(): Adapter {
  return {
    async createUser(user) {
      const id = uuid4();
      await users.createUser({
        id,
        username: user.username || `N-${nanoid()}`,
        name: user.name,
        phoneNumber: user.phoneNumber,
      });
      const u = await users.findUser(id);
      return toAdapterUser(u);
    },
    async getUser(id) {
      const u = await users.findUser(id);
      return toAdapterUserOrNull(u);
    },
    async getUserByEmail(email) {
      return null;
    },
    async getUserByAccount({ provider, providerAccountId }) {
      try {
        const u = await users.findUserBySocailAccount({
          provider,
          socialId: providerAccountId,
        });
        return toAdapterUserOrNull(u);
      } catch (e) {
        return null;
      }
    },
    async updateUser(user): Promise<AdapterUser> {
      if (!user.username) {
        return user as AdapterUser;
      }
      await users.updateUser({
        id: user.id,
        username: user.username,
      });
      const u = await users.findUser(user.id);
      return toAdapterUser(u);
    },
    async deleteUser(userId) {
      await users.deleteUser(userId);
    },
    async linkAccount(account) {
      const id = uuid4();
      const socialAccount = {
        id,
        socialId: account.providerAccountId,
        accessToken: account.access_token,
        expiresAt: account.expires_at,
        tokenType: account.token_type,
        idToken: account.id_token,
        refreshToken: account.refresh_token,
        sessionState: account.session_state,
        ..._.pick(account, ['provider', 'scope', 'userId']),
      } as SocialAccountResponse;
      await socialAccounts.linkAccount(socialAccount);
    },
    async unlinkAccount({ providerAccountId, provider }) {
      await socialAccounts.unlinkAccount({
        provider,
        socialId: providerAccountId,
      });
    },
    async createSession({ sessionToken, userId, expires }) {
      const id = uuid4();
      await sessions.createSession({
        id,
        sessionToken,
        userId,
        expires,
      });

      const session = await sessions.findSession(sessionToken);
      return session as AdapterSession;
    },
    async getSessionAndUser(sessionToken) {
      const session = await sessions.findSession(sessionToken);
      const user = await users.findUserBySession(sessionToken);

      if (!session || !user) return null;
      return {
        session,
        user: toAdapterUser(user),
      };
    },
    async updateSession(session) {
      await sessions.updateSession({
        sessionToken: session.sessionToken,
        expires: session.expires,
        userId: session.userId,
      });
      const s = await sessions.findSession(session.sessionToken);
      if (!s) return null;
      return s;
    },
    async deleteSession(sessionToken) {
      await sessions.deleteSession(sessionToken);
    },
    async createVerificationToken({ identifier, expires, token }) {
      return null;
    },
    async useVerificationToken({ identifier, token }) {
      return null;
    },
  };
}
