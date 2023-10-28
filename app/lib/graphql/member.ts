import { Role } from './role';

export type Member = {
  id: string;
  createdAt: Date;
  userId: string;
  guildId: string;
  roles: Role[];
};
