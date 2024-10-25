'use client';

import { useSearchParams } from 'next/navigation';
import {
  FindSocialAccountConflictsOrderByInput,
  FindSocialAccountConflictsWhereInput,
} from '@/generated/graphql';
import { parseReportStatus } from '@/lib/report/parse-report-status';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import { useInfiniteSocialAccountConflicts } from '@/hooks/use-infinite-social-account-conflicts';
import SocialAccountConflictPreview from './social-account-conflict-preview';
import SocialAccountConflictFeedHeader from './social-account-conflict-feed-header';

export default function SocialAccountConflictFeed({
  defaultWhere,
  defaultOrderBy,
}: {
  defaultWhere: FindSocialAccountConflictsWhereInput;
  defaultOrderBy: FindSocialAccountConflictsOrderByInput;
}) {
  const searchParams = useSearchParams();
  const status = parseReportStatus({
    status:
      searchParams.get('status') || (defaultWhere.status as string | undefined),
  });
  const period = searchParams.get('period');
  const provider = [null, 'all'].includes(searchParams.get('provider'))
    ? undefined
    : searchParams.get('provider');
  const socialId = searchParams.get('socialId') || undefined;
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { setRef, loading, data } = useInfiniteSocialAccountConflicts({
    where: {
      ...defaultWhere,
      status,
      createdAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
      provider,
      socialId,
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
      <SocialAccountConflictFeedHeader />
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
      <div ref={setRef} />
    </div>
  );
}
