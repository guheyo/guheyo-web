import { Button, ButtonProps } from '@mui/material';
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

interface Option {
  value: string;
  label: string;
  selected: boolean;
}

interface OptionsProps {
  optionsProps: {
    options: Option[];
    label: {
      name: string;
      style: string;
    };
    button: {
      defaultStyle: string;
      selectedStyle: string;
    };
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
    <div className="flex flex-col gap-2">
      <div className={optionsProps.label.style}>{optionsProps.label.name}</div>
      <div id={field.name} className="grid grid-cols-4 md:grid-cols-6 gap-2">
        {optionsProps.options.map((option) => (
          <Button
            key={option.label}
            name={field.name}
            type="button"
            {...buttonProps}
            value={option.value}
            className={
              option.selected
                ? optionsProps.button.selectedStyle
                : optionsProps.button.defaultStyle
            }
            onClick={(e) => {
              field.onChange(e);
            }}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
