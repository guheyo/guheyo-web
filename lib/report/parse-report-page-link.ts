export const parseReportPageLink = ({
  username,
  type,
  slug,
}: {
  username: string;
  type: string;
  slug: string;
}) => `/user/${username}/${type}/${slug}/report`;
