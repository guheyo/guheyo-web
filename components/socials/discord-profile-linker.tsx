'use client';

import { linkSocialProfile } from '@/lib/api/user';
import { DISCORD_ABSOLUTE_SUBMIT_BUTTON_STYLE } from '@/lib/social/discord/discord.styles';
import { MouseEventHandler, useState } from 'react';
import SocialLogo from './social-logo';
import AlertDialog from '../base/alert-dialog';

export default function DiscordProfileLinker() {
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    await linkSocialProfile({
      provider: 'discord',
    });
    setOpen(true);
  };

  const handleClose: MouseEventHandler = (e) => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-3">
        <SocialLogo provider="discord" width={24} height={24} />
        <div className="text-lg text-light-200">디스코드 프로필</div>
      </div>
      <div className="flex flex-col gap-2 text-light-200">
        <div className="text-base text-light-200">업데이트할 정보</div>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="text-sm bg-dark-400 p-3 font-semibold rounded"
            disabled
          >
            사용자명
          </button>
          <button
            type="button"
            disabled
            className="text-sm bg-dark-400 p-3 font-semibold rounded"
          >
            아바타 이미지
          </button>
        </div>
      </div>
      <button
        type="submit"
        className={DISCORD_ABSOLUTE_SUBMIT_BUTTON_STYLE}
        onClick={handleClick}
      >
        디스코드 프로필 불러오기
      </button>
      <AlertDialog
        open={open}
        text="프로필이 업데이트되었어요!"
        handleClose={handleClose}
      />
    </div>
  );
}