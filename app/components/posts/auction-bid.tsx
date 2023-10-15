'use client';

import { AuctionPost, BidState } from 'prisma';
import moment from 'moment';
import UserProfile from '../users/user-profile';

interface AuctionBidProps {
  auctionPost: AuctionPost;
}

export default function AuctionBid({ auctionPost }: AuctionBidProps) {
  function getBidPrice(bidState: BidState) {
    return `${bidState.bidAmount / 10000}만원`;
  }

  const bidStates = auctionPost.bidState;
  const auctionPeriodFormat = 'YYYY년 M월 D일 A h:mm';

  return (
    <div className="flex flex-col justify-end items-end w-full h-[90%] gap-2">
      {bidStates.map((bidState) => (
        <div
          key={bidState.id}
          className="w-full rounded shadow p-3 flex justify-start items-center"
        >
          <div className="flex flex-row justify-center items-center gap-2">
            <UserProfile
              user={bidState.bidder}
              displayAvatar
              displayUsername
              displayDM
            />
            <div className="text-sm md:text-base font-extrabold text-black">
              {getBidPrice(bidState)}
            </div>
          </div>
          <div className="flex-1 text-right ">
            <div className="text-xs text-gray-600">
              {moment(bidState.bidAt).format('D일 A h시 m분')}
            </div>
          </div>
        </div>
      ))}
      <div className="w-full rounded shadow p-3 flex justify-start items-center">
        <div className="flex flex-row justify-center items-center gap-2">
          <UserProfile
            user={auctionPost.user}
            displayAvatar
            displayUsername
            displayDM
          />
        </div>
        <div className="flex-1 text-right text-xs">
          <span className="block">
            <b>경매시작</b>{' '}
            {moment(auctionPost.auctionStartDate).format(auctionPeriodFormat)}
          </span>
          <span className="block">
            <b>경매종료</b>{' '}
            {moment(auctionPost.auctionEndDate).format(auctionPeriodFormat)}
          </span>
        </div>
      </div>
    </div>
  );
}
