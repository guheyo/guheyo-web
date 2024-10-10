'use client';

import Link from 'next/link';
import { BrandPreviewResponse } from '@/generated/graphql';
import { parseBrandHomeLink } from '@/lib/brand/parse-brand-home-link';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import FollowDialog from '../follow/follow-dialog';
import Avatar from '../avatar/avatar';
import InfoCard from '../info/info-card';

interface Props {
  brand: BrandPreviewResponse;
  displayGroup: boolean;
}

export default function BrandListviewPreview({ brand, displayGroup }: Props) {
  const device = useDeviceDetect();

  return (
    <Link
      href={parseBrandHomeLink({
        slug: brand.slug!,
      })}
    >
      <div className="flex flex-row justify-between items-center p-4 bg-dark-400 rounded-lg text-gray-300">
        <InfoCard
          name={brand.name}
          icon={
            <Avatar
              name={brand.name}
              src={brand.logo || undefined}
              fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
            />
          }
          about={brand.description}
        />
        <FollowDialog
          target="brand"
          targetId={brand.id}
          followed={brand.followed === true}
        />
      </div>
    </Link>
  );
}
