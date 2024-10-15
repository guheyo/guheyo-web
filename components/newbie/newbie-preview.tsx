'use client';

import Link from 'next/link';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { SocialAccountWithoutAuthResponse } from '@/generated/graphql';
import Avatar from '../avatar/avatar';
import InfoCard from '../info/info-card';
import PostCreatedAt from '../posts/post-created-at';
import SocialLogos from '../socials/social-logos';

export default function NewbiePreview({
  userId,
  username,
  avatarURL,
  about,
  createdAt,
  socialAccounts,
}: {
  userId: string;
  username: string;
  avatarURL?: string | null;
  about?: string | null;
  createdAt: Date;
  socialAccounts: SocialAccountWithoutAuthResponse[];
}) {
  const device = useDeviceDetect();
  const kakaoAccount = socialAccounts.find(
    (account) => account.provider === 'kakao',
  );

  return (
    <Link href={parseUserHomeLink({ username })}>
      <div className="grid grid-cols-12 items-center p-4 bg-dark-400 rounded-lg text-gray-300">
        <div className="col-span-8">
          <InfoCard
            name={username}
            icon={
              <Avatar
                name={username}
                src={avatarURL || undefined}
                fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
              />
            }
            about=""
          />
        </div>
        <div className="col-span-2">
          <SocialLogos socialAccounts={socialAccounts} logoSize={18} />
        </div>
        <div className="col-span-1">
          {kakaoAccount
            ? PostCreatedAt({
                createdAt: kakaoAccount.createdAt,
              })
            : 'x'}
        </div>
        <div className="col-span-1">{PostCreatedAt({ createdAt })}</div>
      </div>
    </Link>
  );
}
