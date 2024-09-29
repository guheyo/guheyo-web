'use client';

import { usePathname } from 'next/navigation';
import { Option } from '@/interfaces/selector.interfaces';
import TextNavbar from '../base/text-navbar';

export default function ChannelNavbar({ options }: { options: Option[] }) {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);

  return (
    <TextNavbar
      options={options}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="medium"
    />
  );
}
