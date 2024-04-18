import { ReportFeedType } from './report.types';

export const parseReportFeedLink = ({
  type,
  slug,
}: {
  type: ReportFeedType;
  slug: string;
}) => `/${type}/${slug}/report`;
