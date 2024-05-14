'use client';

import ReportFeed from '@/components/reports/report-feed';
import { useGroup } from '@/hooks/use-group';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const { group, loading } = useGroup();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || undefined;

  if (loading) return <div />;
  if (!group) return <div />;

  const where: FindReportPreviewsWhereArgs = {
    groupId: group.id,
    type,
  };
  const orderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'desc',
  };

  return <ReportFeed where={where} orderBy={orderBy} />;
}
