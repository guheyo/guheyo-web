export interface User {
  id: string;
  username: string;
  provider: string;
  socialId: string;
  avatarURL?: string;
  iat: number;
  exp: number;
}

export interface Auth {
  user: User | null;
  error: Error | null;
}
