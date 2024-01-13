'use client';

import _ from 'lodash';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { getPrice } from '@/lib/formatter';
import { OfferResponse } from '@/generated/graphql';
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
    <div className="overflow-hidden line-break bg-dark-400 p-3 rounded-lg">
      <button
        type="submit"
        aria-label="offer-detail"
        onClick={() => handleOpen()}
        className="flex flex-row w-full md:flex-col text-start"
      >
        {thumbnail && (
          <div className="flex relative w-[38.5%] md:w-fit">
            <Thumbnail image={thumbnail} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ChatBubbleOvalLeftIcon
                color="white"
                fill="white"
                className="opacity-0 group-hover:opacity-100 w-8 h-8 md:w-9 md:h-9"
              />
            </div>
          </div>
        )}
        <div className="w-[61.5%] md:w-full px-4 md:px-2">
          <div className="text-xs md:text-sm font-medium py-3 text-light-200 h-fit md:h-12">
            {offer.name}
          </div>
          <div className="flex flex-row justify-between items-center py-3">
            <div className="flex-none text-sm md:text-base font-semibold">
              {getPrice(offer.price)}
            </div>
            <div className="text-[10px] md:text-sm text-gray-500 md:text-gray-400">
              {dayjs(offer.createdAt).fromNow()}
            </div>
          </div>
        </div>
      </button>
      <div>
        <OfferDetail offer={offer} open={open} handleOpen={handleOpen} />
      </div>
    </div>
  );
}
