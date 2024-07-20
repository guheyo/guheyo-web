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
  if (/^\/g\/[\w-]*\/(community)/.test(pathname)) return 'group-community';
  if (/^\/g\/[\w-]*\/member/.test(pathname)) return 'group-member';
  if (/^\/g\/[\w-]*\/report/.test(pathname)) return 'group-report';
  if (/^\/user\//.test(pathname)) return 'user';
  if (/^\/(sell|buy|swap)(\?.*)?$/.test(pathname)) return 'market';
  if (/^\/auction(\?.*)?$/.test(pathname)) return 'auction';
  if (/^\/(community)(\?.*)?$/.test(pathname)) return 'community';
  if (/^\/member(\?.*)?$/.test(pathname)) return 'member';
  if (/^\/report(\?.*)?$/.test(pathname)) return 'report';
  if (/^\/search$/.test(pathname)) return 'search-group';
  return 'none';
};

const findHideButton = (location: string): boolean =>
  ![
    'group',
    'group-market',
    'group-auction',
    'group-community',
    'group-member',
    'group-report',
    'market',
    'auction',
    'community',
    'member',
    'report',
  ].includes(location);

const findPlaceholder = (location: string): string => {
  if (location === 'group') return '그룹을 검색해보세요';
  if (location === 'market' || location === 'group-market')
    return '제품을 검색해보세요';
  if (location === 'auction' || location === 'group-auction')
    return '제품을 검색해보세요';
  if (location === 'community' || location === 'group-community')
    return '게시글을 검색해보세요';
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
    if (location === 'group') router.push('/search');
    else if (location === 'group-market' || location === 'group-auction')
      router.push(`/search/product?group=${group?.slug}`);
    else if (location === 'market' || location === 'auction')
      router.push(`/search/product`);
    else if (location === 'group-community')
      router.push(`/search/community?group=${group?.slug}`);
    else if (location === 'community') router.push(`/search/community`);
    else if (location === 'group-member')
      router.push(`/search/member?group=${group?.slug}`);
    else if (location === 'member') router.push(`/search/member`);
    else if (location === 'group-report')
      router.push(`/search/report?group=${group?.slug}`);
    else if (location === 'report') router.push(`/search/report`);
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
