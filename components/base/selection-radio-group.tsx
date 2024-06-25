import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

export interface RadioOption {
  label: string;
  value: string;
}

export default function SelectionRadioGroup({
  formLabel,
  radioOptions,
  selectedOption,
  handleOptionChange,
}: {
  formLabel: string;
  radioOptions: RadioOption[];
  selectedOption: string;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <FormControl>
      <FormLabel
        className="text-base text-gray-300 font-semibold"
        focused={false}
      >
        {formLabel}
      </FormLabel>
      <RadioGroup
        name="controlled-radio-buttons-group"
        className="flex flex-row"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {radioOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
