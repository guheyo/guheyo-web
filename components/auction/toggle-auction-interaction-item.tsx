'use client';

import { useBidInput } from '@/lib/bid/use-bid-input';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export default function ToggleAuctionInteractionItem() {
  const { isBidMode, toggleBidMode } = useBidInput(true);

  return (
    <button type="button" onClick={toggleBidMode}>
      <div className="flex flex-row">
        <SwapHorizIcon className="opacity-50" />
        <div className="font-semibold">{isBidMode ? '댓글' : '입찰'}</div>
      </div>
    </button>
  );
}
