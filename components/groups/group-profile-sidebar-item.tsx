'use client';

import { MouseEventHandler } from 'react';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import SidebarItem from '../base/sidebar-item';
import Avatar from '../avatar/avatar';

export default function GroupProfileSidebarItem({
  name,
  slug,
  icon,
  isActive,
  paddingX,
  paddingY,
  onClick = () => {},
  pathFormatter,
}: {
  name: string;
  slug: string;
  icon?: string | null;
  isActive: boolean;
  paddingX: number;
  paddingY: number;
  onClick?: MouseEventHandler;
  pathFormatter: (slug: string) => string;
}) {
  const device = useDeviceDetect();

  return (
    <SidebarItem
      href={pathFormatter(slug)}
      icon={
        <Avatar
          name={name}
          src={!icon ? '/guheyo/guheyo-logo.svg' : icon}
          fontSize={device === 'mobile' ? 'text-xs' : 'text-sm'}
        />
      }
      text={name}
      isActive={isActive}
      paddingX={paddingX}
      paddingY={paddingY}
      onClick={onClick}
    />
  );
}
