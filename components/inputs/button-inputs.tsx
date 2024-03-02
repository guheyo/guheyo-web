import { Button, ButtonProps } from '@mui/material';
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

interface Option {
  value: string;
  content: string;
  selected: boolean;
}

interface OptionsProps {
  optionsProps: {
    options: Option[];
    defaultStyle: string;
    selectedStyle: string;
  };
}

interface MuiProps {
  buttonProps?: ButtonProps;
}

export default function ButtonInputs<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  optionsProps,
  buttonProps,
  ...props
}: OptionsProps & MuiProps & UseControllerProps<TFieldValues, TName>) {
  const { field } = useController(props);

  return (
    <div>
      {optionsProps.options.map((option) => (
        <Button
          name={field.name}
          key={option.content}
          type="button"
          {...buttonProps}
          value={option.value}
          className={
            option.selected
              ? optionsProps.selectedStyle
              : optionsProps.defaultStyle
          }
          onClick={(e) => {
            field.onChange(e);
          }}
        >
          {option.content}
        </Button>
      ))}
    </div>
  );
}
