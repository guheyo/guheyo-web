'use client';

import { AuthorResponse } from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import FlagIcon from '@mui/icons-material/Flag';
import { useState } from 'react';
import { parsePrice } from '@/lib/offer/parse-price';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import { parseBidDate } from './parse-bid-date';
import BidMenu from './bid-menu';

export default function BidOutput({
  user,
  isCurrentUser,
  displayMenu,
  bidId,
  createdAt,
  canceledAt,
  price,
  handleMenuClick,
}: {
  user: AuthorResponse;
  isCurrentUser: boolean;
  price: number;
  createdAt: Date;
  canceledAt?: Date;
  displayMenu: boolean;
  bidId: string;
  handleMenuClick: (bidId: string) => void;
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
          {displayMenu && isCurrentUser && (
            <BidMenu
              isCurrentUser={isCurrentUser}
              handleMenuClick={() => handleMenuClick(bidId)}
            />
          )}
        </div>
        {canceledAt ? (
          <div className="flex gap-2 text-xs md:text-sm w-fit bg-zinc-900 px-2 py-1.5 rounded-lg">
            <div className="flex flex-row gap-1 items-center text-gray-400 font-thin">
              <FlagIcon fontSize="inherit" />
              입찰 취소
            </div>
            <div className="text-gray-200 font-semibold">
              {parsePrice(price)}
            </div>
          </div>
        ) : (
          <div className="flex gap-2 text-xs md:text-sm w-fit bg-zinc-600 px-2 py-1.5 rounded-lg">
            <div className="text-gray-400 font-thin">입찰</div>
            <div className="text-gray-200 font-semibold">
              {parsePrice(price)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
