export const parseTempGroupFormKey = ({
  userId,
  groupId,
}: {
  userId: string;
  groupId?: string;
}) => (groupId ? `${userId}.edit.group.${groupId}` : `${userId}.write.group`);
