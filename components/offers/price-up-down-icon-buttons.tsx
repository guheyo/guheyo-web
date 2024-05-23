import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { MouseEventHandler } from 'react';

export const UP_DOWN_PRICE_UNIT = 5000;

export default function PriceUpDownIconButtons({
  handleUpButtonClick,
  handleDownButtonClick,
}: {
  handleUpButtonClick: MouseEventHandler;
  handleDownButtonClick: MouseEventHandler;
}) {
  return (
    <div className="flex flex-row gap-2">
      <button
        type="button"
        aria-label="button to add 5000 won"
        onClick={handleUpButtonClick}
      >
        <AddCircleIcon />
      </button>
      <button
        type="button"
        aria-label="button for subtracting 5000 won"
        onClick={handleDownButtonClick}
      >
        <RemoveCircleIcon />
      </button>
    </div>
  );
}
