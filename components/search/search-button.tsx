'use client';

import { IconButton, InputAdornment, TextField } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import { usePathname, useRouter } from 'next/navigation';
import { useReactiveVar } from '@apollo/client';
import { groupVar } from '@/lib/apollo/cache';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { findLocation } from '@/lib/search/find-location';
import { parseSearchLink } from '@/lib/search/parse-search-link';
import { ALL_CHANNELS } from '@/lib/write/write.constants';

const findHideButton = (location: string): boolean =>
  ![...ALL_CHANNELS].includes(location);

const findPlaceholder = (location: string): string => {
  if (location === 'group') return '그룹을 검색해보세요';
  if (location === 'auction' || location === 'group-auction')
    return '경매를 검색해보세요';
  if (location === 'sell' || location === 'group-sell')
    return '판매를 검색해보세요';
  if (location === 'buy' || location === 'group-buy')
    return '구매를 검색해보세요';
  if (location === 'swap' || location === 'group-swap')
    return '교환을 검색해보세요';
  if (location === 'gb' || location === 'group-gb')
    return '공동구매를 검색해보세요';
  if (location === 'community' || location === 'group-community')
    return '스레드를 검색해보세요';
  if (location === 'brand' || location === 'group-brand')
    return '브랜드를 검색해보세요';
  if (location === 'review' || location === 'group-review')
    return '거래 후기를 검색해보세요';
  if (location === 'member' || location === 'group-member')
    return '멤버를 검색해보세요';
  if (location === 'report' || location === 'group-report')
    return '신고를 검색해보세요';
  return '';
};

export default function SearchButton() {
  const router = useRouter();
  const pathname = usePathname();
  const group = useReactiveVar(groupVar);
  const location = findLocation(pathname);
  const hideButton = findHideButton(location);
  const device = useDeviceDetect();

  const handleClick = (): void => {
    router.push(
      parseSearchLink({
        pathname,
        groupSlug:
          group?.slug === 'root' ? undefined : group?.slug || undefined,
      }),
    );
  };

  if (hideButton) return <div />;

  if (device !== 'browser')
    return (
      <IconButton
        type="button"
        onClick={handleClick}
        aria-label="Search Button"
      >
        <SearchRounded className="text-gray-300" />
      </IconButton>
    );
  return (
    <TextField
      className="w-96"
      variant="outlined"
      placeholder={findPlaceholder(location)}
      onClick={handleClick}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchRounded
              sx={{
                color: '#f2f3ed',
              }}
            />
          </InputAdornment>
        ),
        sx: {
          color: '#f2f3ed',
          borderRadius: 6,
          fontSize: '14px',
          backgroundColor: '#404146',
          fontWeight: 500,
          maxHeight: 42,
        },
      }}
    />
  );
}
