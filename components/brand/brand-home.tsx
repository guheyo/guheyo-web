'use client';

import { BrandResponse } from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import Link from 'next/link';
import { parseBrandHomeLink } from '@/lib/brand/parse-brand-home-link';
import Avatar from '../avatar/avatar';
import FollowDialog from '../follow/follow-dialog';
import PlatformLinks from './platform-links';
import FollowCount from '../follow/follow-count';
import BrandNameLink from './brand-name-link';

export default function BrandHome({ brand }: { brand: BrandResponse }) {
  const device = useDeviceDetect();

  return (
    <div className="grid grid-cols-12 gap-0 text-sm md:text-base items-center">
      <div className="col-span-3 w-fit">
        <Link href={parseBrandHomeLink({ slug: brand.slug! })}>
          <Avatar
            name={brand.name}
            src={brand.logo || undefined}
            fontSize={device === 'mobile' ? 'text-6xl' : 'text-9xl'}
          />
        </Link>
      </div>
      <div className="col-span-9">
        <div className="grid grid-cols-12 gap-1">
          <span className="col-span-12 text-gray-300 text-lg font-bold justify-self-start">
            <BrandNameLink brand={brand} />
          </span>
          <div className="col-span-12 text-base">
            <FollowCount
              followType="follower"
              followCount={brand.followBrands.length}
            />
          </div>
        </div>
        <div className="flex flex-row pt-4">
          <div className="w-24">
            <FollowDialog
              target="brand"
              targetId={brand.id}
              followed={brand.followed}
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 pt-4 flex flex-col gap-3">
        {brand.description}
        <div className="flex flex-col gap-2 justify-self-start text-xs md:text-sm">
          <PlatformLinks links={brand.links} />
        </div>
      </div>
    </div>
  );
}
