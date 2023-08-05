import NextAuth, { AuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import DatabaseAdapter from '@/app/adapters';

export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      profile(profile) {
        return profile;
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
  adapter: DatabaseAdapter(),
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
