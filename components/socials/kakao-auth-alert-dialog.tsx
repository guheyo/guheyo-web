/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { MyUserResponse } from '@/generated/graphql';
import { useRouter } from 'next/navigation';
import { parseSocialAccountSettingPageLink } from '@/lib/social/parse-social-account-setting-page.link';

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
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText className="text-sm md:text-base text-dark-500 font-medium">
            [카카오 미인증 알림]
            <br />
            {`${user.username}`}님의 카카오 인증이 완료되지 않았어요
            <br />
            <br />
            인증되지 않은 멤버는
            <br />
            이용이 제한되니 카카오 인증을 완료해 주세요
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="flex justify-end w-full px-4 pb-3">
            <Button
              onClick={handleClose}
              className="bg-gray-200 hover:bg-gray-300 text-dark-500 font-semibold"
            >
              확인
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
