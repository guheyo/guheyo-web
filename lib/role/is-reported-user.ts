import { MyUserResponse } from "@/generated/graphql";
import { findMemberRoles } from "./find-member-roles";
import { ROOT_GROUP_SLUG } from "../group/group.constants";
import { REPORTED_USER_ROLE_NAME } from "./role.constants";

export const IsReportedUser = ({
  user,
}: {
  user: MyUserResponse;
}) => {
  return findMemberRoles({ user, groupSlug: ROOT_GROUP_SLUG }).some((role) => role.name === REPORTED_USER_ROLE_NAME);
};
