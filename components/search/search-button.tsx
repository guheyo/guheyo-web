import { InputAdornment, TextField } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import { usePathname, useRouter } from 'next/navigation';

export default function SearchButton() {
  const router = useRouter();
  const pathname = usePathname();
  const hideButton = pathname === '/search';
  const handleClick = (): void => {
    router.push('/search');
  };

  if (hideButton) return <div />;
  return (
    <TextField
      className="w-36"
      variant="outlined"
      placeholder="그룹 찾기"
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
          fontSize: '16px',
          backgroundColor: '#404146',
          fontWeight: 600,
          maxHeight: 36,
        },
      }}
    />
  );
}
