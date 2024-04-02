import { MyUserResponse } from '@/generated/graphql';

export const findMemberRoles = ({
  user,
  groupSlug,
}: {
  user: MyUserResponse;
  groupSlug: string;
}) => {
  const member = user.members.find((m) => m.group.slug === groupSlug);
  return member?.roles || [];
};
