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

interface TagsInputProps {
  onTagAdd?: (tag: string) => void; // New prop
}

interface TextInputProps {
  textInputProps: {
    label?: {
      name: string;
      style: string;
      image?: string;
    };
    description?: {
      name: string;
      style: string;
    };
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export default function TagsInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  textInputProps,
  textFieldProps,
  onTagAdd,
  ...props
}: TextInputProps &
  MuiProps &
  UseControllerProps<TFieldValues, TName> &
  TagsInputProps) {
  const { field, fieldState } = useController(props);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const tag = field.value.trim();
      if (tag && onTagAdd) {
        onTagAdd(tag);
      }
      field.onChange('');
    }
  };

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
          {textInputProps.description && (
            <div className={`${textInputProps.description.style}`}>
              {textInputProps.description.name}
            </div>
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
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
