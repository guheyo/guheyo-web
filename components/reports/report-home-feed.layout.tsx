'use client';

import { ReactNode } from 'react';
import { USER_REVIEW_CHANNEL_OPTIONS } from '@/lib/user-review/user-review.constants';
import HomeFeedLayout from '../home/home-feed.layout';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import ReportHomeLink from './report-home-link';
import ChannelNavbar from '../channel/channel-navbar';
import ReportSelectors from './report-selectors';
import ReportMoreLink from './report-more-link';

interface Props {
  children: ReactNode;
  showChannels: boolean;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function ReportFeedLayout({
  children,
  showChannels,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<ReportHomeLink />}
      path="report"
      channels={
        showChannels && <ChannelNavbar options={USER_REVIEW_CHANNEL_OPTIONS} />
      }
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            <ReportSelectors />
          </>
        )
      }
      moreLink={showMoreLink && <ReportMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default ReportFeedLayout;
