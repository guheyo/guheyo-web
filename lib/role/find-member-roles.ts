import { MyUserResponse } from "@/generated/graphql";

export const findMemberRoles = ({
  user,
  groupSlug,
}: {
  user: MyUserResponse;
  groupSlug: string;
}) => {
  const member = user.members.find((member) => member.group.slug === groupSlug);
  return member?.roles || [];
}
