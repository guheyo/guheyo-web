'use client';

import Link from 'next/link';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import { GroupPreviewFragment } from '@/generated/graphql';
import { isMobile } from 'react-device-detect';
import GroupInfo from './group-info';
import GroupJoinButton from './gorup-join-button';
import OfferPreview from '../offers/offer-preview';
import DemandPreview from '../demands/demand-preview';

interface Props {
  group: GroupPreviewFragment;
}

export default function GroupPreview({ group }: Props) {
  return (
    <div className="bg-dark-500 rounded-lg">
      <div className="flex flex-row gap-6 justify-between w-fit px-0 md:px-0 pt-4 mx-2 md:mx-0">
        <Link href={`g/${group.slug}`}>
          <GroupInfo slug={group.slug!} />
        </Link>
        <GroupJoinButton slug={group.slug!} />
      </div>
      <div className="text-sm md:text-base text-light-200 font-medium mx-2 md:mx-3 pt-3 md:pt-5 pb-1">
        <Link href={`g/${group.slug}/market/offers`}>
          <span className="flex flex-row items-center gap-1">
            <PaidIcon fontSize={isMobile ? 'small' : 'medium'} />
            {group.name} 팝니다
          </span>
        </Link>
      </div>
      <div className="grid gap-x-0 md:gap-x-6 gap-y-1 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-0 md:px-0 mx-2 md:mx-0">
        {group.offers.map((offer) => (
          <OfferPreview key={offer.slug} offer={offer} type="thumbnail" />
        ))}
      </div>
      <div className="flex justify-end text-sm md:text-base text-dark-200 font-medium mx-2 md:mx-3 pt-2">
        <Link href={`g/${group.slug}/market/offers`}>
          <span className="flex flex-row items-center gap-1">
            <PlayCircleOutlineOutlinedIcon
              fontSize={isMobile ? 'small' : 'medium'}
            />
            판매 채널
          </span>
        </Link>
      </div>
      <div className="text-sm md:text-base text-light-200 font-medium mx-2 md:mx-3 pt-0 md:pt-5 pb-1">
        <div className="flex flex-row items-center gap-1">
          <PaidIcon fontSize={isMobile ? 'small' : 'medium'} />
          <Link href={`g/${group.slug}/market/demands`}>
            {group.name} 삽니다
          </Link>
        </div>
      </div>
      <div className="grid gap-x-0 md:gap-x-6 gap-y-1 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-0 md:px-0 mx-2 md:mx-0">
        {group.demands.map((demand) => (
          <DemandPreview key={demand.slug} demand={demand} type="text" />
        ))}
      </div>
      <div className="flex justify-end text-sm md:text-base text-dark-200 font-medium mx-2 md:mx-3 pt-2">
        <Link href={`g/${group.slug}/market/demands`}>
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
