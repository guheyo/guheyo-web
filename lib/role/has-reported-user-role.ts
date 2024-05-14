import { MyUserResponse } from '@/generated/graphql';
import { REPORTED_USER_ROLE_NAME } from './role.constants';

export const hasReportedUserRole = ({ user }: { user: MyUserResponse }) =>
  user.roles.some((role) => role.name === REPORTED_USER_ROLE_NAME);
