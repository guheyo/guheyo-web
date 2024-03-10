export interface AuthUser {
  id: string;
  username: string;
  provider: string;
  socialId: string;
  avatarURL?: string;
  iat: number;
  exp: number;
}

export interface Auth {
  user: AuthUser | null;
  error: Error | null;
  loading: boolean;
}
