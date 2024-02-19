export interface JwtUser {
  id: string;
  username: string;
  provider: string;
  socialId: string;
  avatarURL?: string;
}

export interface Payload extends JwtUser {
  iat: number;
  exp: number;
}
