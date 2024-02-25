'use client';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { Option } from '@/interfaces/selector.interfaces';

export default function BaseSelector({
  name,
  selectedValue,
  options,
  inputClassName,
  handleChange,
}: {
  name: string;
  selectedValue: string;
  options: Option[];
  inputClassName: string;
  handleChange: (e: SelectChangeEvent) => void;
}) {
  return (
    <Select
      id={`${name}-selector`}
      placeholder={options[0].label}
      value={selectedValue}
      onChange={handleChange}
      inputProps={{
        className: inputClassName,
      }}
      sx={{
        color: '#f2f3ed',
        fontWeight: 'bold',
      }}
    >
      {options.map(({ value, label }, i) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}
