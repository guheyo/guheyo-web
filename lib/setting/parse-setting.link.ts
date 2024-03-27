import { SettingItem } from './setting.constants';

export const parseSettingLink = ({
  settingItem,
}: {
  settingItem: SettingItem;
}) => `/setting/${settingItem}`;
