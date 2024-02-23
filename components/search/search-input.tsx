'use client';

import { InputAdornment, TextField } from '@mui/material';
import { SearchRounded, ClearRounded } from '@mui/icons-material';
import { Dispatch, SetStateAction, useState } from 'react';

export default function SearchInput({
  value,
  setValue,
  placeholder,
  handleKeyDown,
  handleChange,
}: {
  value?: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  handleKeyDown: (e: any) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [showClearIcon, setShowClearIcon] = useState('none');

  const handleClick = (): void => {
    setValue('');
    setShowClearIcon('none');
  };

  const handleChangeAndClearIcon = (e) => {
    setShowClearIcon(e.target.value === '' ? 'none' : 'flex');
    handleChange(e);
  };

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      onChange={handleChangeAndClearIcon}
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
          borderRadius: 2,
          fontSize: '18px',
          backgroundColor: '#404146',
          fontWeight: 600,
          minWidth: 360,
        },
      }}
    />
  );
}
