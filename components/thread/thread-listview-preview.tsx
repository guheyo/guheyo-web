'use client';

import Link from 'next/link';
import { ThreadPreviewResponse } from '@/generated/graphql';
import { parseThreadDetailLink } from '@/lib/thread/parse-thread-detail-link';
import { parseGroupThreadLink } from '@/lib/thread/parse-group-thread-link';
import GroupNameLink from '../groups/group-name-link';
import ThreadPreviewHeader from './thread-preview-header';
import ThreadPreviewFooter from './thread-preview-footer';
import ThreadPreviewContent from './thread-preview-content';

interface Props {
  thread: ThreadPreviewResponse;
  isInGroup: boolean;
}

export default function ThreadListViewPreview({ thread, isInGroup }: Props) {
  const { group } = thread.post;
  return (
    <div className="relative overflow-hidden bg-dark-400 px-4 rounded-lg">
      <Link
        href={parseThreadDetailLink({
          slug: thread.post.slug!,
        })}
        className="w-full text-start"
      >
        <div className="grid grid-cols-1 gap-2 pt-4 pb-4">
          <div className="flex flex-col gap-1">
            {!isInGroup && (
              <div className="w-fit">
                <GroupNameLink
                  name={group.name}
                  href={parseGroupThreadLink({ groupSlug: group.slug! })}
                />
              </div>
            )}
            <ThreadPreviewHeader thread={thread} />
            <ThreadPreviewContent thread={thread} />
            <ThreadPreviewFooter thread={thread} />
          </div>
        </div>
      </Link>
    </div>
  );
}
