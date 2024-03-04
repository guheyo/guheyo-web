import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { IconProps } from '@mui/material';

import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

interface ImagesInputProps {
  imagesInputProps: {
    label: {
      name: string;
      style: string;
    };
    icon: IconProps;
    onChange: (e: any) => void;
  };
}

interface InputProps {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function ImagesInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  inputProps,
  imagesInputProps,
  ...props
}: InputProps & ImagesInputProps & UseControllerProps<TFieldValues, TName>) {
  const { field } = useController(props);

  return (
    <div>
      <label htmlFor={field.name} className={`${imagesInputProps.label.style}`}>
        {imagesInputProps.label.name}
        <CameraAltIcon fontSize={imagesInputProps.icon.fontSize} />
      </label>
      <input
        type="file"
        id={field.name}
        {...inputProps}
        onChange={(e) => imagesInputProps.onChange(e.target.files)}
      />
    </div>
  );
}
