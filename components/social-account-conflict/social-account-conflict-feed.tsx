'use client';

import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  FindSocialAccountConflictsOrderByInput,
  FindSocialAccountConflictsWhereInput,
} from '@/generated/graphql';
import { parseReportStatus } from '@/lib/report/parse-report-status';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import { useInfiniteSocialAccountConflicts } from '@/hooks/use-infinite-social-account-conflicts';
import SocialAccountConflictPreview from './social-account-conflict-preview';

export default function SocialAccountConflictFeed({
  defaultWhere,
  defaultOrderBy,
}: {
  defaultWhere: FindSocialAccountConflictsWhereInput;
  defaultOrderBy: FindSocialAccountConflictsOrderByInput;
}) {
  const searchParams = useSearchParams();
  const ref = useRef<HTMLDivElement>(null);
  const status = parseReportStatus({
    status:
      searchParams.get('status') || (defaultWhere.status as string | undefined),
  });
  const period = searchParams.get('period');
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { loading, data } = useInfiniteSocialAccountConflicts({
    ref,
    where: {
      ...defaultWhere,
      status,
      createdAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
    },
    orderBy: defaultOrderBy,
    keyword,
    target,
    take: 12,
  });

  if (loading) return <div />;
  if (!data?.findSocialAccountConflicts) return <div />;

  const conflicts = data.findSocialAccountConflicts.edges;

  return (
    <div className="grid gap-2 grid-cols-1">
      <div className="grid grid-cols-12 justify-between items-center w-full p-4 text-gray-200 bg-blurple-500 rounded-lg text-xs md:text-sm">
        <div className="col-span-5">신규 유저</div>
        <div className="col-span-5">기존 유저</div>
        <div className="col-span-1">앱</div>
        <div className="col-span-1">시간</div>
      </div>
      {conflicts.map((conflict) => (
        <SocialAccountConflictPreview
          key={conflict.cursor}
          newUser={conflict.node.newUser}
          existingUser={conflict.node.existingUser}
          status={conflict.node.status}
          createdAt={conflict.node.createdAt}
          provider={conflict.node.provider}
        />
      ))}
      <div ref={ref} />
    </div>
  );
}
