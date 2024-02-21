import { InputAdornment, TextField } from '@mui/material';
import { SearchRounded, ClearRounded } from '@mui/icons-material';
import { KeyboardEvent, useState } from 'react';

export default function SearchInput() {
  const [showClearIcon, setShowClearIcon] = useState('none');
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === '' ? 'none' : 'flex');
    setValue(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      // TODO
    }
  };

  const handleClick = (): void => {
    setValue('');
    setShowClearIcon('none');
  };

  return (
    <TextField
      variant="outlined"
      placeholder="그룹에서 구해요"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={value}
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
        endAdornment: (
          <InputAdornment
            position="end"
            style={{ display: showClearIcon }}
            onClick={handleClick}
          >
            <ClearRounded
              sx={{
                color: '#7f838e',
              }}
            />
          </InputAdornment>
        ),
        sx: {
          color: '#f2f3ed',
          borderRadius: 8,
          fontSize: '16px',
          backgroundColor: '#404146',
          fontWeight: 600,
          maxHeight: 36,
        },
      }}
    />
  );
}
