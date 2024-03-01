import { TextField, TextFieldProps } from '@mui/material';
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

interface MuiProps {
  textFieldProps?: TextFieldProps;
}

export default function TextInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  textFieldProps,
  ...props
}: MuiProps & UseControllerProps<TFieldValues, TName>) {
  const { field, fieldState } = useController(props);

  return (
    <TextField
      {...textFieldProps}
      {...field}
      error={!!fieldState.error}
      helperText={!!fieldState.error && fieldState.error.message}
    />
  );
}
