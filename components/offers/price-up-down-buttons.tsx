import {
  PRICE_DOWN_BUTTON_STYLE,
  PRICE_UP_BUTTON_STYLE,
} from '@/lib/offer/offer.styles';
import { MouseEventHandler } from 'react';

export const UP_DOWN_PRICE_UNIT = 5000;

export default function PriceUpDownButtons({
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
        onClick={handleUpButtonClick}
        className={PRICE_UP_BUTTON_STYLE}
      >
        + {UP_DOWN_PRICE_UNIT}원
      </button>
      <button
        type="button"
        onClick={handleDownButtonClick}
        className={PRICE_DOWN_BUTTON_STYLE}
      >
        - {UP_DOWN_PRICE_UNIT}원
      </button>
    </div>
  );
}
