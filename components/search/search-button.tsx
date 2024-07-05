'use client';

import { IconButton, InputAdornment, TextField } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import { usePathname, useRouter } from 'next/navigation';
import { useReactiveVar } from '@apollo/client';
import { groupVar } from '@/lib/apollo/cache';
import { useDeviceDetect } from '@/hooks/use-device-detect';

const findLocation = (pathname: string) => {
  if (pathname === '/') return 'group';
  if (/^\/g\/[\w-]*\/(sell|buy|swap)/.test(pathname)) return 'group-market';
  if (/^\/g\/[\w-]*\/auction/.test(pathname)) return 'group-auction';
  if (/^\/g\/[\w-]*\/member/.test(pathname)) return 'member';
  if (/^\/user\//.test(pathname)) return 'user';
  if (/^\/(sell|buy|swap)(\?.*)?$/.test(pathname)) return 'market';
  if (/^\/auction(\?.*)?$/.test(pathname)) return 'auction';
  if (/^\/search$/.test(pathname)) return 'search-guild';
  if (/^\/search\/g\/[\w-]*\/product/.test(pathname)) return 'search-product';
  if (/^\/search\/g\/[\w-]*\/member/.test(pathname)) return 'search-member';
  return 'none';
};

const findHideButton = (location: string): boolean =>
  ![
    'group',
    'group-market',
    'group-auction',
    'market',
    'auction',
    'member',
  ].includes(location);

const findPlaceholder = (location: string): string => {
  if (location === 'group') return '그룹을 검색해보세요';
  if (location === 'group-market' || location === 'group-auction')
    return '제품을 검색해보세요';
  if (location === 'market' || location === 'auction')
    return '제품을 검색해보세요';
  if (location === 'member') return '멤버를 검색해보세요';
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
    if (location === 'group') router.push('/search');
    else if (location === 'group-market' || location === 'group-auction')
      router.push(`/search/g/${group?.slug}/product`);
    else if (location === 'market' || location === 'auction')
      router.push(`/search/product`);
    else if (location === 'member')
      router.push(`/search/g/${group?.slug}/member`);
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
