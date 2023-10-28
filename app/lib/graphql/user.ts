import { Member } from './member';

export type User = {
  id: string;
  createdAt: Date;
  username: string;
  avatarURL: string | null;
  members: Member[];
};
