'use client';

import { Autocomplete, TextField } from '@mui/material';
import React, { RefObject, SyntheticEvent } from 'react';
import { Option } from '@/interfaces/selector.interfaces';
import { DEFAULT_INPUT_TEXT_COLOR } from '@/lib/input/input.colors';

export default function InfiniteScrollAutocomplete({
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
  handleChange: (e: SyntheticEvent, value: Option | null) => void;
}) {
  return (
    <Autocomplete
      id={`${name}-infinite-scroll-autocomplete`}
      value={options.find((option) => option.value === selectedValue)}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={!selectedValue ? placeholder : ''}
          sx={{
            '& .MuiInputBase-root': {
              height: 28, // Set the input height
              borderRadius: 30,
            },
            '& .MuiInputBase-input': {
              marginTop: -2.4,
            },
            '& .MuiInputLabel-root': {
              color: DEFAULT_INPUT_TEXT_COLOR,
              fontSize: 12,
              height: 28,
              top: -10,
            },
            '& .MuiInputLabel-shrink': {
              display: 'hidden',
            },
            bgcolor: '#5865F2',
            borderRadius: 30,
          }}
          inputProps={{
            ...params.inputProps,
            className: inputClassName,
          }}
          InputLabelProps={{
            shrink: false,
          }}
        />
      )}
      sx={{
        minWidth: 96,
        maxWidth: 160,
      }}
      options={options}
      renderOption={(props, option, { index }) => (
        <li {...props} key={option.value}>
          {option.label}
          {/* Add a ref to the last option */}
          {index === options.length - 1 && <div ref={ref} />}
        </li>
      )}
      getOptionLabel={(option) => option.label}
      className="text-gray-200"
    />
  );
}
