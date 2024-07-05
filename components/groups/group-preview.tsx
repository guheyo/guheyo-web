'use client';

import Link from 'next/link';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { GroupPreviewFragment } from '@/generated/graphql';
import { isMobile } from 'react-device-detect';
import { parseMarketLink } from '@/lib/offer/parse-market-link';
import OfferPreview from '../offers/offer-preview';
import GroupJoinSection from './group-join-section';

interface Props {
  group: GroupPreviewFragment;
}

export default function GroupPreview({ group }: Props) {
  return (
    <div className="bg-dark-500 rounded-lg">
      <div className="px-2 md:px-0">
        <GroupJoinSection
          name={group.name}
          icon={group.icon}
          slug={group.slug!}
        />
      </div>
      <div className="text-sm md:text-base text-gray-300 font-medium mx-0 md:mx-1 pt-3 md:pt-5 pb-1">
        <Link
          href={parseMarketLink({
            groupSlug: group.slug!,
            businessFunction: 'sell',
          })}
        >
          <span className="flex flex-row items-center gap-1 px-3 md:px-0">
            <SellIcon fontSize={isMobile ? 'small' : 'medium'} />
            {group.name} 판매
          </span>
        </Link>
      </div>
      <div className="grid gap-x-0 md:gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2 px-0 md:px-0">
        {group.sells.map((sellOffer) => (
          <OfferPreview key={sellOffer.id} offer={sellOffer} type="thumbnail" />
        ))}
      </div>
      <div className="flex justify-end text-sm md:text-base text-dark-200 font-medium mx-0 md:mx-1 pt-2">
        <Link
          href={parseMarketLink({
            groupSlug: group.slug!,
            businessFunction: 'sell',
          })}
        >
          <span className="flex flex-row items-center gap-1">
            <PlayCircleOutlineOutlinedIcon
              fontSize={isMobile ? 'small' : 'medium'}
            />
            판매 채널
          </span>
        </Link>
      </div>

      <div className="text-sm md:text-base text-gray-300 font-medium mx-0 md:mx-1 pt-0 md:pt-5 pb-1">
        <div className="flex flex-row items-center gap-1 px-3 md:px-0">
          <ShoppingBagIcon fontSize={isMobile ? 'small' : 'medium'} />
          <Link
            href={parseMarketLink({
              groupSlug: group.slug!,
              businessFunction: 'buy',
            })}
          >
            {group.name} 구매
          </Link>
        </div>
      </div>
      <div className="grid gap-x-0 md:gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2 px-0 md:px-0">
        {group.buys.map((buyOffer) => (
          <OfferPreview key={buyOffer.id} offer={buyOffer} type="listview" />
        ))}
      </div>
      <div className="flex justify-end text-sm md:text-base text-dark-200 font-medium mx-0 md:mx-1 pt-2">
        <Link
          href={parseMarketLink({
            groupSlug: group.slug!,
            businessFunction: 'buy',
          })}
        >
          <span className="flex flex-row items-center gap-1">
            <PlayCircleOutlineOutlinedIcon
              fontSize={isMobile ? 'small' : 'medium'}
            />
            구매 채널
          </span>
        </Link>
      </div>
    </div>
  );
}
