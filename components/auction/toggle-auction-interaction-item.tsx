'use client';

import { useBidInput } from '@/lib/bid/use-bid-input';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import PaidIcon from '@mui/icons-material/Paid';

export default function ToggleAuctionInteractionItem() {
  const { isBidMode, toggleBidMode } = useBidInput(true);

  return (
    <button type="button" onClick={toggleBidMode}>
      <div className="flex flex-row items-center gap-1">
        {isBidMode ? (
          <ChatBubbleOvalLeftIcon
            color="white"
            fill="white"
            className="w-4 md:w-5"
          />
        ) : (
          <PaidIcon className="w-4 md:w-5" />
        )}
      </div>
    </button>
  );
}
