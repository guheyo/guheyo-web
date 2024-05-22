'use client';

import { AuthorResponse } from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { useState } from 'react';
import { parsePrice } from '@/lib/offer/parse-price';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import { parseBidDate } from './parse-bid-date';

export default function BidOutput({
  user,
  isCurrentUser,
  price,
  createdAt,
  canceledAt,
  displayMenu,
  bidId,
}: {
  user: AuthorResponse;
  isCurrentUser: boolean;
  price: number;
  createdAt: Date;
  canceledAt?: Date;
  displayMenu: boolean;
  bidId: string;
}) {
  const device = useDeviceDetect();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-row gap-4 items-start"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <UserProfileRedirectButton
        user={user}
        displayAvatar
        displayUsername={false}
        fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center text-xs md:text-sm h-4">
          <div className="flex flex-row gap-2">
            <div className="text-gray-300 font-semibold">{user.username}</div>
            <div>{parseBidDate({ createdAt, canceledAt })}</div>
          </div>
        </div>
        <div className="flex text-xs md:text-sm text-dark-100 font-thin">
          {parsePrice(price)}
        </div>
      </div>
    </div>
  );
}
