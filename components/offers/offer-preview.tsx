'use client';

import _ from 'lodash';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { getPrice } from '@/lib/formatter';
import { OfferResponse } from '@/generated/graphql';
import UserProfile from '../users/user-profile';
import OfferDetail from './offer-detail';
import Thumbnail from '../base/thumbnail';

interface Props {
  offer: OfferResponse;
  cols: number;
}

export default function OfferPreview({ offer, cols }: Props) {
  const sizes = cols === 1 ? 'w-96 h-72' : 'w-48 sm:w-72 md:w-96 h-36 md:h-72';
  const thumbnail = _.get(offer.images, '[0]');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col overflow-hidden shadow line-break">
      <div className="flex p-1 md:p-2 font-medium">
        <div className="flex flex-row gap-2 items-center">
          <UserProfile
            user={offer.seller}
            displayAvatar
            displayUsername
            displayDM
          />
          <div className="justify-self-end text-[10px] md:text-xs text-gray-600">
            {dayjs(offer.createdAt).fromNow()}
          </div>
        </div>
      </div>
      {thumbnail && (
        <div className="flex relative">
          <button type="submit" onClick={() => handleOpen()} className="group">
            <Thumbnail image={thumbnail} sizes={sizes} />
            <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
              <ChatBubbleOvalLeftIcon
                color="white"
                fill="white"
                className="opacity-0 group-hover:opacity-100 w-8 h-8 md:w-9 md:h-9"
              />
            </div>
          </button>
        </div>
      )}
      <div className="flex flex-row gap-1 p-1.5 md:p-4 justify-between items-center">
        <div className="text-xs md:text-base font-semibold">{offer.name}</div>
        <div className="flex-none text-xs md:text-base">
          {getPrice(offer.price)}
        </div>
      </div>
      <div>
        <OfferDetail offer={offer} open={open} handleOpen={handleOpen} />
      </div>
    </div>
  );
}
