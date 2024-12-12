'use client';

import { InputAdornment, TextField } from '@mui/material';
import { SearchRounded, ClearRounded } from '@mui/icons-material';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { Dispatch, SetStateAction, useState } from 'react';

export default function SearchInput({
  text,
  setText,
  placeholder,
  handleKeyDown,
  handleChange,
}: {
  text?: string;
  setText: Dispatch<SetStateAction<string>>;
  placeholder: string;
  handleKeyDown: (e: any) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [showClearIcon, setShowClearIcon] = useState('none');
  const device = useDeviceDetect();

  const handleClick = (): void => {
    setText('');
    setShowClearIcon('none');
  };

  const handleChangeAndClearIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowClearIcon(e.target.value === '' ? 'none' : 'flex');
    handleChange(e);
  };

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      onChange={handleChangeAndClearIcon}
      onKeyDown={handleKeyDown}
      value={text}
      fullWidth
      slotProps={{
        input: {
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
            borderRadius: 6,
            fontSize: device === 'mobile' ? '14px' : '14px',
            backgroundColor: '#404146',
            fontWeight: 500,
            height: 44,
          },
          autoFocus: true,
        },
      }}
    />
  );
}
