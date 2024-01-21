'use client';

import Link from 'next/link';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { GuildPreviewFragment } from '@/generated/graphql';
import GuildInfo from './guild-info';
import DemandPreview from '../demands/demand-preview';
import OfferPreview from '../offers/offer-preview';

interface Props {
  guild: GuildPreviewFragment;
}

export default function GuildPreview({ guild }: Props) {
  return (
    <div className="bg-dark-500 rounded-lg">
      <div className="w-fit px-0 md:px-0 pt-4 mx-2 md:mx-0">
        <Link href={`g/${guild.slug}`}>
          <GuildInfo slug={guild.slug!} />
        </Link>
      </div>
      <div className="flex flex-row justify-between gap-2 text-lg text-star-500 font-medium mx-2 md:mx-3 pt-5 pb-1">
        <Link href={`g/${guild.slug}/market/offers`}>
          <span className="flex flex-row font-medium items-center gap-1">
            {guild.name} 팝니다
          </span>
        </Link>
      </div>
      <div className="grid gap-x-0 md:gap-x-6 gap-y-1 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-0 md:px-0">
        {guild.offers.map((offer) => (
          <OfferPreview key={offer.slug} offer={offer} />
        ))}
      </div>
      <div className="flex justify-end text-base md:text-lg text-light-200 font-medium mx-2 md:mx-3 pt-2">
        <Link href={`g/${guild.slug}/market/offers`}>
          <span className="flex flex-row font-medium items-center gap-1">
            <PlayCircleOutlineOutlinedIcon fontSize="medium" />
            판매 채널 입장
          </span>
        </Link>
      </div>
      <div className="text-lg text-star-500 font-medium mx-2 md:mx-3 pt-5 pb-1">
        <Link href={`g/${guild.slug}/market/demands`}>{guild.name} 삽니다</Link>
      </div>
      <div className="grid gap-x-0 md:gap-x-6 gap-y-1 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-0 md:px-0">
        {guild.demands.map((demand) => (
          <DemandPreview key={demand.slug} demand={demand} />
        ))}
      </div>
      <div className="flex justify-end text-base md:text-lg text-light-200 font-medium mx-2 md:mx-3 pt-2">
        <Link href={`g/${guild.slug}/market/demands`}>
          <span className="flex flex-row font-medium items-center gap-1">
            <PlayCircleOutlineOutlinedIcon fontSize="medium" />
            구매 채널 입장
          </span>
        </Link>
      </div>
    </div>
  );
}
