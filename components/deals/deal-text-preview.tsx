'use client';

import dayjs from 'dayjs';
import { getPrice } from '@/lib/formatter';
import Link from 'next/link';
import { Deal } from '@/lib/deal/deal.types';

interface Props {
  deal: Deal;
  name: string;
  price: number;
  bumpedAt: Date;
  username: string;
  slug: string;
}

export default function DealTextPreview({
  deal,
  name,
  price,
  bumpedAt,
  username,
  slug,
}: Props) {
  return (
    <div className="overflow-hidden line-break bg-dark-400 p-3 rounded-lg">
      <Link
        href={`/user/${username}/${deal}/${slug}`}
        className="w-full text-start"
      >
        <div className="grid gap-2">
          <div className="justify-self-start text-xs md:text-sm font-medium text-light-200">
            {name}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex-none text-xs md:text-sm font-semibold">
              {getPrice(price)}
            </div>
            <div className="text-[10px] md:text-sm text-gray-500 md:text-gray-500">
              {dayjs(bumpedAt).fromNow()}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
