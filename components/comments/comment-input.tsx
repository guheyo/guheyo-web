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

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      event.stopPropagation();
      const textField = event.target as HTMLTextAreaElement;
      const cursorPosition = textField.selectionStart;
      const { value } = textField;
      const newValue = `${value.substring(
        0,
        cursorPosition,
      )}\n${value.substring(cursorPosition)}`;
      field.onChange(newValue);
    }
  };

  return (
    <TextField
      {...field}
      {...textFieldProps}
      error={!!fieldState.error}
      helperText={!!fieldState.error && fieldState.error.message}
      fullWidth
      variant="standard"
      multiline
      InputProps={{
        sx: {
          color: DEFAULT_INPUT_TEXT_COLOR,
          alignItems: 'flex-start',
          fontSize: 14,
        },
        onKeyDown: handleKeyDown,
      }}
    />
  );
}
