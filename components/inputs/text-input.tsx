import { TextField, TextFieldProps } from '@mui/material';
import Image from 'next/image';
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
    label?: {
      name: string;
      style: string;
      image?: string;
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
      {textInputProps.label && (
        <div className={`${textInputProps.label.style}`}>
          {textInputProps.label.image ? (
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={textInputProps.label.image}
                width={24}
                height={24}
                alt={`${textInputProps.label.name}`}
                className="rounded-lg"
              />
              {textInputProps.label.name}
            </div>
          ) : (
            <div>{textInputProps.label.name}</div>
          )}
        </div>
      )}
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
