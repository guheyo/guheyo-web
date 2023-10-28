import { Role } from './role';

export type Guild = {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  position: number;
  roles: Role[];
};
