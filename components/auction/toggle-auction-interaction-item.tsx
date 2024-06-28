'use client';

import { useBidInput } from '@/lib/bid/use-bid-input';
import tailwindConfig from '@/tailwind.config';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import PaidIcon from '@mui/icons-material/Paid';

const {
  theme: { colors },
} = tailwindConfig;

export default function ToggleAuctionInteractionItem() {
  const { isBidMode, toggleBidMode } = useBidInput();

  return (
    <button type="button" onClick={toggleBidMode}>
      <div className="flex flex-row items-center gap-1">
        {isBidMode ? (
          <ChatBubbleOvalLeftIcon
            fill={colors['blurple-500']}
            className="w-4 md:w-5"
          />
        ) : (
          <PaidIcon className="w-4 md:w-5" />
        )}
      </div>
    </button>
  );
}
