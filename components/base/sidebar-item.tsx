'use client';

import { ListItem, ListItemIcon, Typography } from '@mui/material';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

export default function SidebarItem({
  href,
  icon,
  text,
  isActive,
  paddingX,
  paddingY,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  paddingX: number;
  paddingY: number;
  onClick: MouseEventHandler;
}) {
  return (
    <Link href={href}>
      <ListItem
        onClick={onClick}
        sx={{
          paddingX,
          paddingY,
        }}
      >
        <ListItemIcon
          className={
            isActive ? 'text-blurple-400 font-semibold' : 'text-gray-400'
          }
          style={{ minWidth: 'unset', width: 'auto', marginRight: '8px' }}
        >
          {icon}
        </ListItemIcon>
        <Typography
          className={`text-sm lg:text-sm ${
            isActive ? 'text-blurple-400 font-semibold' : 'text-gray-400'
          }`}
        >
          {text}
        </Typography>
      </ListItem>
    </Link>
  );
}
