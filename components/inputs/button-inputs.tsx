import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

export interface ButtonOption {
  value: string | number;
  label: string;
  selected: boolean;
}

interface ButtonInputsProps {
  buttonInputsProps: {
    options: ButtonOption[];
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

export default function ButtonInputs<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  buttonInputsProps,
  ...props
}: ButtonInputsProps & UseControllerProps<TFieldValues, TName>) {
  const { field } = useController(props);

  return (
    <div className="flex flex-col gap-2">
      <div className={buttonInputsProps.label.style}>
        {buttonInputsProps.label.name}
      </div>
      <div id={field.name} className="grid grid-cols-4 md:grid-cols-6 gap-2">
        {buttonInputsProps.options.map((option) => (
          <button
            key={option.label}
            name={field.name}
            type="button"
            value={option.value.toString()}
            className={
              option.selected
                ? buttonInputsProps.button.selectedStyle
                : buttonInputsProps.button.defaultStyle
            }
            onClick={(e) => {
              field.onChange(option.value);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
