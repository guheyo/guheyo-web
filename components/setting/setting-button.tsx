'use client';

import { parseSettingLink } from '@/lib/setting/parse-setting.link';
import { SettingItem } from '@/lib/setting/setting.constants';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';

export default function SettingButton({
  settingItem,
}: {
  settingItem: SettingItem;
}) {
  return (
    <Link href={parseSettingLink({ settingItem })}>
      <SettingsIcon />
    </Link>
  );
}
