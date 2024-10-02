import { parseNewURL } from '../query-string/parse-new-url';
import { ALL_CHANNELS } from '../write/write.constants';
import { findLocation } from './find-location';

export const parseSearchLink = ({
  pathname,
  groupSlug,
}: {
  pathname: string;
  groupSlug?: string;
}) => {
  const location = findLocation(pathname);

  if (ALL_CHANNELS.includes(location))
    return parseNewURL({
      searchParamsString: '',
      pathname: `/search/${location}`,
      paramsToUpdate: [
        {
          name: 'group',
          value: groupSlug,
        },
      ],
    });

  return '/search';
};
