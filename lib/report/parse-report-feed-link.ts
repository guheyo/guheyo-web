export const parseReportFeedLink = ({
  type,
  slug,
}: {
  type: string;
  slug: string;
}) => `/${type}/${slug}/report`;
