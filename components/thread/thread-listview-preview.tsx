'use client';

import Link from 'next/link';
import { ThreadPreviewResponse } from '@/generated/graphql';
import { parseThreadDetailLink } from '@/lib/thread/parse-thread-detail-link';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import GroupNameLink from '../groups/group-name-link';
import ThreadPreviewHeader from './thread-preview-header';
import ThreadPreviewFooter from './thread-preview-footer';
import ThreadPreviewContent from './thread-preview-content';

interface Props {
  thread: ThreadPreviewResponse;
  displayGroup: boolean;
}

export default function ThreadListViewPreview({ thread, displayGroup }: Props) {
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
            {displayGroup && (
              <div className="w-fit">
                <GroupNameLink
                  name={thread.post.group.name}
                  href={parseChannelLink({
                    groupSlug: thread.post.group.slug,
                    channelSlug: thread.post.category?.slug!,
                  })}
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
