import { Session, SocialAccount, User } from 'prisma';
import { Adapter, AdapterSession, AdapterUser } from 'next-auth/adapters';
import _ from 'lodash';
import * as users from '../lib/api/users';
import * as socialAccounts from '../lib/api/social-accounts';
import * as sessions from '../lib/api/sessions';

const toAdapterUser = (user: User) =>
  ({
    ...user,
    email: '',
    emailVerified: null,
  }) as AdapterUser;

const toAdapterUserOrNull = (user: User) => {
  if (!user) return null;
  return toAdapterUser(user);
};

export default function DatabaseAdapter(): Adapter {
  return {
    async createUser(user) {
      const u = await users.createUser({
        username: user.username,
      });
      return toAdapterUser(u);
    },
    async getUser(id) {
      const u = await users.getUser(id);
      return toAdapterUserOrNull(u);
    },
    async getUserByEmail(email) {
      return null;
    },
    async getUserByAccount({ providerAccountId, provider }) {
      const u = await users.getUserBySocailAccount(providerAccountId, provider);
      return toAdapterUserOrNull(u);
    },
    async updateUser(user): Promise<AdapterUser> {
      if (!user.username) {
        return user as AdapterUser;
      }
      const body = {
        username: user.username,
      };
      const u = await users.updateUser(user.id, body);
      return toAdapterUser(u);
    },
    async deleteUser(userId) {
      await users.deleteUser(userId);
    },
    async linkAccount(account) {
      const socialAccount = {
        socialId: account.providerAccountId,
        accessToken: account.access_token,
        expiresAt: account.expires_at,
        tokenType: account.token_type,
        idToken: account.id_token,
        refreshToken: account.refresh_token,
        sessionState: account.session_state,
        ..._.pick(account, ['provider', 'scope', 'userId']),
      } as SocialAccount;
      await socialAccounts.linkAccount(socialAccount);
    },
    async unlinkAccount({ providerAccountId, provider }) {
      await socialAccounts.unlinkAccount({
        provider,
        socialId: providerAccountId,
      });
    },
    async createSession({ sessionToken, userId, expires }) {
      const body = {
        sessionToken,
        userId,
        expires,
      };
      const session = await sessions.createSession(body);
      return session as AdapterSession;
    },
    async getSessionAndUser(sessionToken) {
      const { session, user } = await sessions.getSessionAndUser(sessionToken);
      if (!user || !session) return null;
      return {
        session: session as AdapterSession,
        user: toAdapterUser(user),
      };
    },
    async updateSession(session) {
      const s = await sessions.updateSession(session as Session);
      if (!s) return null;
      return s as AdapterSession;
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
