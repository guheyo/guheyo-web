export const parseUserAbout = ({
  username,
  about,
}: {
  username: string;
  about?: string | null;
}) => about || `둘 셋, 안녕하세요!${username}입니다`;
