'use client';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { RefObject } from 'react';
import { Option } from '@/interfaces/selector.interfaces';
import Avatar from '../avatar/avatar';

export default function InfiniteScrollSelector({
  name,
  placeholder,
  selectedValue,
  options,
  inputClassName,
  ref,
  handleChange,
}: {
  name: string;
  placeholder: string;
  selectedValue: string;
  options: Option[];
  inputClassName: string;
  ref: RefObject<HTMLDivElement>;
  handleChange: (e: SelectChangeEvent) => void;
}) {
  return (
    <Select
      id={`${name}-infinite-scroll-selector`}
      value={selectedValue}
      inputProps={{
        className: inputClassName,
      }}
      onChange={handleChange}
      sx={{
        color: '#f2f3ed',
        fontWeight: 'bold',
        height: '36px',
        '& .MuiSelect-select .notranslate::after': placeholder
          ? {
              content: `"${placeholder}"`,
              opacity: 0.7,
            }
          : {},
      }}
    >
      {options.map(({ value, label, imageUrl }, i) => (
        <MenuItem key={value} value={value}>
          <div className={`flex flex-row items-center gap-1 ${inputClassName}`}>
            {imageUrl && (
              <Avatar name={label} src={imageUrl} fontSize="text-2xs" />
            )}
            {label}
          </div>
        </MenuItem>
      ))}
      <div ref={ref} />
    </Select>
  );
}
