'use client';

import ReportFeed from '@/components/reports/report-feed';
import { useGroup } from '@/hooks/use-group';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';

export default function Page() {
  const { group, loading } = useGroup();

  if (loading) return <div />;
  if (!group) return <div />;

  const where: FindReportPreviewsWhereArgs = {
    groupId: group.id,
    type: undefined,
  };
  const orderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'desc',
  };

  return <ReportFeed defaultWhere={where} defaultOrderBy={orderBy} />;
}
