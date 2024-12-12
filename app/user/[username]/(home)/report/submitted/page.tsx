'use client';

import ReportFeed from '@/components/reports/report-feed';
import {
  FindReportPreviewsOrderByInput,
  FindReportPreviewsWhereInput,
  useFindUserQuery,
} from '@/generated/graphql';
import { use } from 'react';

function Page({
  params,
}: {
  params: Promise<{
    username: string;
  }>;
}) {
  const { username } = use(params);
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

  const where: FindReportPreviewsWhereInput = {
    userId: user.id,
  };
  const orderBy: FindReportPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return <ReportFeed defaultWhere={where} defaultOrderBy={orderBy} />;
}

export default Page;
