import { parseNextBidPrice } from '@/lib/bid/parse-next-bid-price';
import { PRICE_UP_BUTTON_STYLE } from '@/lib/offer/offer.styles';
import { parsePrice } from '@/lib/offer/parse-price';

export default function NextBidPriceButton({
  currentBidPrice,
  handleButtonClick,
}: {
  currentBidPrice: number;
  handleButtonClick: (nextBidPrice: number) => void;
}) {
  const nextBidPrice = parseNextBidPrice(currentBidPrice);
  return (
    <div className="flex flex-row gap-2">
      <button
        type="button"
        onClick={() => handleButtonClick(nextBidPrice)}
        className={PRICE_UP_BUTTON_STYLE}
      >
        {parsePrice(nextBidPrice)}
      </button>
    </div>
  );
}
