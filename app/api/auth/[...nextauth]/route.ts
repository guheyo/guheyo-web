import NextAuth, { AuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import NaverProvider from 'next-auth/providers/naver';
import DatabaseAdapter from '@/app/adapters';
import { nanoid } from 'nanoid';
import { AdapterUser } from 'next-auth/adapters';
import { updateUser } from '@/lib/api/users';

export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      profile(profile) {
        return profile;
      },
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.response?.id,
          username: `N-${nanoid()}`,
          name: profile.response?.name,
          phoneNumber: profile.response?.mobile_e164,
        } as AdapterUser;
      },
      style: {
        logo: `${process.env.NEXTAUTH_URL}/naver.jpg`,
        bg: '#06c755',
        text: '#ffffff',
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'database',
    maxAge: 3 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async session({ session, user }) {
      if (user) {
        session.user = user;
      }
      return session;
    },
  },
  events: {
    async linkAccount(message) {
      if (message.account.provider === 'naver') {
        await updateUser({
          id: message.user.id,
          name: message.profile.name,
          phoneNumber: message.profile.phoneNumber,
        });
      }
    },
  },
  adapter: DatabaseAdapter(),
  theme: {
    colorScheme: 'light',
    brandColor: '#CB337B',
    logo: `${process.env.NEXTAUTH_URL}/star-bg-purple-rounded.ico`,
    buttonText: '#CB337B',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
