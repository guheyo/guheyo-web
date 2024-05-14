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
import { parseUserReportFeedLink } from '@/lib/user/parse-user-page.link';

export default function ReportsAlertDialog({ user }: { user: MyUserResponse }) {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  const handleClickOpen: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose: React.MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(parseUserReportFeedLink({ username: user.username }));
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
            [신고 알림]
            <br />
            {`${user.username}`}님에게 신고가 접수되었어요
            <br />
            <br />
            소명 댓글을 달지 않을 경우
            <br />
            이용 제한과 페널티가 부여되니
            <br />
            사유에 대해 성실하게 소명해 주세요
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
