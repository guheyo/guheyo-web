'use client';

import React from 'react';
import Link from 'next/link';
import SocialLogo from '../socials/social-logo';

export default function DiscordGuildLink({
  children,
  width,
  height,
}: {
  children: React.ReactNode;
  width: number;
  height: number;
}) {
  return (
    <Link href="https://discord.com/invite/dongmulyi-wanggug-806383744151584779">
      <div className="flex items-rows gap-1">
        {children}
        <SocialLogo provider="discord" width={width} height={height} />
      </div>
    </Link>
  );
}
