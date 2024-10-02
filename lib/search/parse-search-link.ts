import {
  ALL_CHANNELS,
  GROUP_PREFIXED_ALL_CHANNELS,
} from '../write/write.constants';
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

  if (ALL_CHANNELS.includes(location)) return `/search/${location}`;

  if (GROUP_PREFIXED_ALL_CHANNELS.includes(location))
    return `/search/${location}?group=${groupSlug}`;

  return '/search';
};
