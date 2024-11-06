'use client';

import { ListItem, ListItemIcon, Typography } from '@mui/material';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

export default function NavbarIconItem({
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
          flexDirection: { xs: 'column', md: 'column' },
          gap: 0.5,
        }}
        alignItems="center"
      >
        <ListItemIcon
          className={
            isActive ? 'text-blurple-400 font-semibold' : 'text-gray-400'
          }
          style={{ minWidth: 'unset', width: 'auto' }}
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
