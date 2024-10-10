/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { MyUserResponse } from '@/generated/graphql';
import { useRouter } from 'next/navigation';
import { parseSocialAccountSettingPageLink } from '@/lib/social/parse-social-account-setting-page.link';
import BgDialog from '../base/bg-dialog';

export default function KakaoAuthAlertDialog({
  user,
}: {
  user: MyUserResponse;
}) {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  const handleClickOpen: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose: React.MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(parseSocialAccountSettingPageLink('kakao'));
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClickOpen}
        className="text-yellow-500"
      >
        <NewReleasesIcon fontSize="inherit" className="text-lg md:text-xl" />
      </button>
      <BgDialog
        open={open}
        title="[인증 알림]"
        content={`${user.username}님의 카카오 인증을 완료해 주세요`}
        closeButtonName="확인"
        onClose={handleClose}
      />
    </>
  );
}
