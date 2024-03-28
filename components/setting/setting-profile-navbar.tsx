'use client';

import { usePathname } from 'next/navigation';
import TextNavbar from '../base/text-navbar';
import { SETTING_PROFILE_OPTIONS } from './setting.constants';

export default function SettingProfileNavbar() {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);

  return (
    <TextNavbar
      options={SETTING_PROFILE_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="large"
    />
  );
}
