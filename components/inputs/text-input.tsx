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

interface TextInputProps {
  textInputProps: {
    label: {
      name: string;
      style: string;
    };
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export default function TextInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  textInputProps,
  textFieldProps,
  ...props
}: TextInputProps & MuiProps & UseControllerProps<TFieldValues, TName>) {
  const { field, fieldState } = useController(props);

  return (
    <div className="flex flex-col gap-2">
      <div className={`${textInputProps.label.style}`}>
        {textInputProps.label.name}
      </div>
      <TextField
        {...textFieldProps}
        {...field}
        error={!!fieldState.error}
        helperText={!!fieldState.error && fieldState.error.message}
        onChange={
          textInputProps.onChange ? textInputProps.onChange : field.onChange
        }
      />
    </div>
  );
}
