import { findLocation } from './find-location';

export const parseSearchLink = ({
  pathname,
  groupSlug,
}: {
  pathname: string;
  groupSlug?: string;
}) => {
  const location = findLocation(pathname);

  if (location === 'group') return '/search';
  if (location === 'group-market' || location === 'group-auction')
    return `/search/product?group=${groupSlug}`;
  if (location === 'market' || location === 'auction') return `/search/product`;
  if (location === 'group-gb') return `/search/gb?group=${groupSlug}`;
  if (location === 'gb') return `/search/gb`;
  if (location === 'group-community')
    return `/search/community?group=${groupSlug}`;
  if (location === 'community') return `/search/community`;
  if (location === 'group-brand') return `/search/brand?group=${groupSlug}`;
  if (location === 'brand') return `/search/brand`;
  if (location === 'group-member') return `/search/member?group=${groupSlug}`;
  if (location === 'member') return `/search/member`;
  if (location === 'group-review') return `/search/review?group=${groupSlug}`;
  if (location === 'review') return `/search/review`;
  if (location === 'group-report') return `/search/report?group=${groupSlug}`;
  if (location === 'report') return `/search/report`;
  return '/search';
};
