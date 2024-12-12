'use client';

import { Autocomplete, TextField } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import { Option } from '@/interfaces/selector.interfaces';
import { isUndefined } from 'lodash';
import { SetRefCallback } from '@/lib/ref/ref.types';

export default function InfiniteScrollAutocomplete({
  name,
  placeholder,
  selectedValue,
  options,
  className,
  inputClassName,
  inputLabelClassName,
  setRef,
  handleChange,
}: {
  name: string;
  placeholder: string;
  selectedValue?: string;
  options: Option[];
  className: string;
  inputClassName: string;
  inputLabelClassName: string;
  setRef: SetRefCallback;
  handleChange: (e: SyntheticEvent, value: Option | null) => void;
}) {
  const selectedOption =
    options.find((option) => option.value === selectedValue) || null;

  return (
    <Autocomplete
      id={`${name}-infinite-scroll-autocomplete`}
      value={selectedOption}
      onChange={handleChange}
      className={className}
      renderInput={(params) => (
        <TextField
          {...params}
          label={isUndefined(selectedValue) ? placeholder : ''}
          slotProps={{
            input: {
              ...params.InputProps,
              className: inputClassName, // Class can also be applied here
            },

            inputLabel: {
              shrink: false, // Control shrink behavior directly here
              className: inputLabelClassName,
            },
          }}
        />
      )}
      options={options}
      renderOption={(props, option, { index }) => (
        <li {...props} key={`${option.value}-${index}`}>
          {option.label}
          {index === options.length - 1 && <div ref={setRef} />}
        </li>
      )}
      getOptionLabel={(option) => option.label}
    />
  );
}
