import {
  PRICE_DOWN_BUTTON_STYLE,
  PRICE_UP_BUTTON_STYLE,
} from '@/lib/offer/offer.styles';
import { parsePrice } from '@/lib/offer/parse-price';
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
        + {parsePrice(UP_DOWN_PRICE_UNIT)}
      </button>
      <button
        type="button"
        onClick={handleDownButtonClick}
        className={PRICE_DOWN_BUTTON_STYLE}
      >
        - {parsePrice(UP_DOWN_PRICE_UNIT)}
      </button>
    </div>
  );
}
