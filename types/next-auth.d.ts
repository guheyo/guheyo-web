import { User as PrismaUser } from 'prisma';

declare module 'next-auth' {
  interface User extends PrismaUser {}

  interface Session {
    user?: User;
    expires: Date;
  }
}

declare module 'next-auth/adapters' {
  interface AdapterUser extends PrismaUser {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: string;
  }
}
