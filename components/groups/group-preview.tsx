'use client';

import Link from 'next/link';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import { GroupPreviewFragment } from '@/generated/graphql';
import { isMobile } from 'react-device-detect';
import { parseGroupMarketLink } from '@/lib/offer/parse-group-market-link';
import OfferPreview from '../offers/offer-preview';
import GroupJoinSection from './group-join-section';

interface Props {
  group: GroupPreviewFragment;
}

export default function GroupPreview({ group }: Props) {
  return (
    <div className="bg-dark-500 rounded-lg">
      <GroupJoinSection
        name={group.name}
        icon={group.icon}
        slug={group.slug!}
      />
      <div className="text-sm md:text-base text-light-200 font-medium mx-0 md:mx-1 pt-3 md:pt-5 pb-1">
        <Link
          href={parseGroupMarketLink({
            groupSlug: group.slug!,
            businessFunction: 'sell',
          })}
        >
          <span className="flex flex-row items-center gap-1">
            <PaidIcon fontSize={isMobile ? 'small' : 'medium'} />
            {group.name} 팝니다
          </span>
        </Link>
      </div>
      <div className="grid gap-x-0 md:gap-x-6 gap-y-1 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-0 md:px-0">
        {group.sells.map((sellOffer) => (
          <OfferPreview key={sellOffer.id} offer={sellOffer} type="thumbnail" />
        ))}
      </div>
      <div className="flex justify-end text-sm md:text-base text-dark-200 font-medium mx-0 md:mx-1 pt-2">
        <Link
          href={parseGroupMarketLink({
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
      <div className="text-sm md:text-base text-light-200 font-medium mx-0 md:mx-1 pt-0 md:pt-5 pb-1">
        <div className="flex flex-row items-center gap-1">
          <PaidIcon fontSize={isMobile ? 'small' : 'medium'} />
          <Link
            href={parseGroupMarketLink({
              groupSlug: group.slug!,
              businessFunction: 'buy',
            })}
          >
            {group.name} 삽니다
          </Link>
        </div>
      </div>
      <div className="grid gap-x-0 md:gap-x-6 gap-y-1 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-0 md:px-0">
        {group.buys.map((buyOffer) => (
          <OfferPreview key={buyOffer.id} offer={buyOffer} type="text" />
        ))}
      </div>
      <div className="flex justify-end text-sm md:text-base text-dark-200 font-medium mx-0 md:mx-1 pt-2">
        <Link
          href={parseGroupMarketLink({
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
