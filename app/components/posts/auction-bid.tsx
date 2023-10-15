'use client';

import { BidState } from 'prisma';
import UserProfile from '../users/user-profile';

interface AuctionBidProps {
  bidStates: BidState[];
}

export default function AuctionBid({ bidStates }: AuctionBidProps) {
  return (
    <div className="flex flex-col justify-end items-end w-full h-[90%]">
      {bidStates.map((bidState) => (
        <div
          key={bidState.id}
          className="w-full rounded shadow p-3 flex justify-start items-center"
        >
          <UserProfile
            user={bidState.bidder}
            displayAvatar
            displayUsername
            displayDM
          />
        </div>
      ))}
    </div>
  );
}
