'use client';

import { OFFER_OPTIONS } from '@/lib/offer/offer.constants';
import { BusinessFunction } from '@/lib/offer/offer.types';
import AuctionMoreLink from '../auction/auction-more-link';
import OfferMoreLink from '../offers/offer-more-link';

export default function MarketMoreLinks() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <AuctionMoreLink />
      {OFFER_OPTIONS.map(({ value }) => (
        <OfferMoreLink
          key={value}
          businessFunction={value as BusinessFunction}
        />
      ))}
    </div>
  );
}
