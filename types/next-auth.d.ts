import { MyUserResponse } from '@/generated/graphql';

declare module 'next-auth' {
  interface User extends MyUserResponse {}

  interface Session {
    user?: User;
    expires: Date;
  }
}

declare module 'next-auth/adapters' {
  interface AdapterUser extends MyUserResponse {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: string;
  }
}
