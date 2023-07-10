import { User } from "prisma";
import {
  Avatar
} from "@material-tailwind/react";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export default function UserAvatar({
  user,
  size
}: {
  user: User,
  size: Size
}) {
  return (
    <Avatar
      src={user.avatarURL ? user.avatarURL : '/dongwang-gray.svg'}
      alt={`${user.username} avatar`}
      size={size}
    />
  );
};