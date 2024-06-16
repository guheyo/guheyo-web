'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import createQueryString from '@/lib/query-string/create-query-string';
import { Option } from '@/interfaces/selector.interfaces';
import TextNavbar from '../base/text-navbar';

export default function AuctionStatusNavbar({
  options,
}: {
  options: Option[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get('status') || undefined;

  const parseNewURL = (newValue?: string) => {
    const queryString = createQueryString({
      searchParamsString: searchParams.toString(),
      name: 'status',
      value: newValue,
    });
    return `${pathname}?${queryString}`;
  };

  return (
    <TextNavbar
      options={options}
      selectedValue={selectedValue}
      parseNewURL={(value) => parseNewURL(value)}
      size="medium"
    />
  );
}
