'use client';

import ReportFeed from '@/components/reports/report-feed';
import { useFindUserQuery } from '@/generated/graphql';

function Page({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

  return <ReportFeed reportedUserId={user.id} />;
}

export default Page;
