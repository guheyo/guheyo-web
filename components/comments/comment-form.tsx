'use client';

import {
  RegisterOptions,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { DEFAULT_INPUT_TEXT_COLOR } from '@/lib/input/input.colors';
import { TextField, TextFieldProps } from '@mui/material';
import { CommentValues } from '@/lib/comment/comment.types';
import SendButton from './send-button';

export default function CommentForm({
  defaultValues,
  registerOptions,
  textFieldProps,
  handleSubmitValid,
}: {
  defaultValues: CommentValues;
  registerOptions: RegisterOptions<CommentValues>;
  textFieldProps: TextFieldProps;
  handleSubmitValid: SubmitHandler<CommentValues>;
}) {
  const { handleSubmit, register } = useForm<CommentValues>({
    defaultValues,
  });

  const handleSubmitError: SubmitErrorHandler<CommentValues> = (errors, event) => {
    // TODO
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}>
      <TextField
        {...register('content', { required: registerOptions.required })}
        fullWidth
        multiline={textFieldProps.multiline}
        className="rounded bg-dark-400"
        placeholder={textFieldProps.placeholder}
        InputProps={{
          endAdornment: <SendButton />,
          sx: {
            color: DEFAULT_INPUT_TEXT_COLOR,
            alignItems: 'flex-start',
          },
        }}
        size={textFieldProps.size}
        minRows={textFieldProps.minRows}
      />
    </form>
  );
}
