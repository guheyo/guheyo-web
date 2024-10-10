'use client';

import { usePathname } from 'next/navigation';
import { BRAND_HOME_OPTIONS } from '@/lib/brand/brand.constants';
import TextNavbar from '../base/text-navbar';

export default function BrandHomeNavbar({ slug }: { slug: string }) {
  const pathname = usePathname();
  const selectedValue = pathname.split(`/`).at(3);

  return (
    <TextNavbar
      options={BRAND_HOME_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => `/brand/${slug}/${value}`}
      size="medium"
    />
  );
}
