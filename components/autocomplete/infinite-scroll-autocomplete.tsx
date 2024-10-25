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
  return (
    <Autocomplete
      key={selectedValue}
      id={`${name}-infinite-scroll-autocomplete`}
      value={options.find((option) => option.value === selectedValue)}
      onChange={handleChange}
      className={className}
      renderInput={(params) => (
        <TextField
          {...params}
          label={isUndefined(selectedValue) ? placeholder : undefined}
          InputProps={{
            ...params.InputProps,
            className: inputClassName, // Class can also be applied here
          }}
          InputLabelProps={{
            shrink: false, // Control shrink behavior directly here
            className: inputLabelClassName,
          }}
        />
      )}
      options={options}
      renderOption={(props, option, { index }) => (
        <>
          <li {...props} key={option.value}>
            {option.label}
          </li>
          {index === options.length - 1 && <div ref={setRef} />}
        </>
      )}
      getOptionLabel={(option) => option.label}
    />
  );
}
