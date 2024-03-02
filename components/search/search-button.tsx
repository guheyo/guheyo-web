import { InputAdornment, TextField } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import { usePathname, useRouter } from 'next/navigation';
import { useReactiveVar } from '@apollo/client';
import { groupVar } from '@/lib/apollo/cache';
import { useDeviceDetect } from '@/hooks/use-device-detect';

const findLocation = (pathname: string) => {
  if (pathname === '/') return 'home';
  if (/^\/g\/[\w-]*\/market/.test(pathname)) return 'guild';
  if (/^\/user\//.test(pathname)) return 'user';
  if (/^\/search$/.test(pathname)) return 'search-guild';
  if (/^\/search\/g\/[\w-]*\/market/.test(pathname)) return 'search-product';
  return 'none';
};

const findHideButton = (location: string): boolean =>
  !['home', 'guild'].includes(location);

const findPlaceholder = (location: string): string => {
  if (location === 'home') return '그룹';
  if (location === 'guild') return '제품';
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
    if (location === 'home') router.push('/search');
    else if (location === 'guild')
      router.push(`/search/g/${group?.slug}/market`);
  };

  if (hideButton) return <div />;
  return (
    <TextField
      className="w-28"
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
          borderRadius: 2,
          fontSize: device === 'mobile' ? '14px' : '16px',
          backgroundColor: '#404146',
          fontWeight: 600,
          maxHeight: 36,
        },
      }}
    />
  );
}
