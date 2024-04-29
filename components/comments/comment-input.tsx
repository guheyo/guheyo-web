'use client';

import { UseControllerProps, useController } from 'react-hook-form';
import { DEFAULT_INPUT_TEXT_COLOR } from '@/lib/input/input.colors';
import { TextField, TextFieldProps } from '@mui/material';
import { CommentValues } from '@/lib/comment/comment.types';

export default function CommentInput({
  textFieldProps,
  controllerProps,
}: {
  textFieldProps: TextFieldProps;
  controllerProps: UseControllerProps<CommentValues>;
}) {
  const { field, fieldState } = useController(controllerProps);

  return (
    <TextField
      {...field}
      {...textFieldProps}
      error={!!fieldState.error}
      helperText={!!fieldState.error && fieldState.error.message}
      fullWidth
      variant="standard"
      InputProps={{
        sx: {
          color: DEFAULT_INPUT_TEXT_COLOR,
          alignItems: 'flex-start',
          fontSize: 14,
        },
      }}
    />
  );
}
