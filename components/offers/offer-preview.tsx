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
}

export default function OfferPreview({ offer }: Props) {
  const thumbnail = _.get(offer.images, '[0]');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col overflow-hidden line-break">
      {thumbnail && (
        <div className="flex relative">
          <button type="submit" onClick={() => handleOpen()} className="group">
            <Thumbnail image={thumbnail} />
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

      <div className="flex flex-row items-center py-2 gap-2 h-12">
        <UserProfile
          user={offer.seller}
          displayAvatar
          displayUsername
          displayDM
          mode="light"
        />
        <div className="text-xs md:text-sm font-semibold">{offer.name}</div>
      </div>

      <div className="flex flex-row justify-between items-center pl-8">
        <div className="flex-none text-xs md:text-xs font-semibold">
          {getPrice(offer.price)}
        </div>
        <div className="text-[10px] md:text-xs text-gray-600">
          {dayjs(offer.createdAt).fromNow()}
        </div>
      </div>
      <div>
        <OfferDetail offer={offer} open={open} handleOpen={handleOpen} />
      </div>
    </div>
  );
}
