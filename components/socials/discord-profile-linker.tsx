'use client';

import { linkSocialProfile } from '@/lib/api/user';
import { DISCORD_ABSOLUTE_SUBMIT_BUTTON_STYLE } from '@/lib/social/discord/discord.styles';
import { MouseEventHandler, useState } from 'react';
import { reGenerateTokens } from '@/lib/api/auth';
import LoadingButton from '@mui/lab/LoadingButton';
import SocialLogo from './social-logo';
import AlertDialog from '../base/alert-dialog';

export default function DiscordProfileLinker() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await linkSocialProfile({
      provider: 'discord',
    });
    await reGenerateTokens();
    setOpen(true);
    setLoading(false);
  };

  const handleClose: MouseEventHandler = (e) => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-3">
        <SocialLogo provider="discord" width={20} height={20} />
        <div className="text-gray-300 text-sm md:text-base">
          디스코드 프로필
        </div>
      </div>
      <div className="flex flex-col gap-2 text-gray-300">
        <div className="text-base text-gray-300 text-sm md:text-base">
          업데이트할 정보
        </div>
        <div className="flex flex-row gap-2 text-xs md:text-sm">
          <button
            type="button"
            className="bg-dark-400 p-2 font-semibold rounded-lg"
            disabled
          >
            사용자명
          </button>
          <button
            type="button"
            disabled
            className="bg-dark-400 p-2 font-semibold rounded-lg"
          >
            아바타 이미지
          </button>
        </div>
      </div>
      <LoadingButton
        type="submit"
        loading={loading}
        className={DISCORD_ABSOLUTE_SUBMIT_BUTTON_STYLE}
        onClick={handleClick}
      >
        디스코드 프로필 불러오기
      </LoadingButton>
      <AlertDialog
        open={open}
        text="프로필이 업데이트되었어요!"
        handleClose={handleClose}
      />
    </div>
  );
}
