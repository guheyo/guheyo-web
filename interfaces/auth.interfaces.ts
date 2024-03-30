export interface SocialProfile {
  id: string;
  username: string;
  provider: string;
  avatarURL?: string;
}

export interface MemberRole {
  groupSlug: string;
  roleNames: string[];
}

export interface UserPayload {
  socialProfile: SocialProfile;
  id: string;
  username: string;
  avatarURL?: string;
  memberRoles: MemberRole[];
}

export interface JwtPayload extends UserPayload {
  iat: number;
  exp: number;
}

export interface JwtPayloadResult {
  jwtPayload: JwtPayload | null;
  error: Error | null;
  loading: boolean;
}
