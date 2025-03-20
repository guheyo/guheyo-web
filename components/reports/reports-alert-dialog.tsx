/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { MyUserResponse } from '@/generated/graphql';
import { useRouter } from 'next/navigation';
import { parseUserReportFeedLink } from '@/lib/user/parse-user-page.link';
import BgDialog from '../base/bg-dialog';

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
      <BgDialog
        open={open}
        title="[신고 알림]"
        content={`${user.username}님에게 신고가 접수되었어요\n\n적합한 소명 댓글을 달지 않을 경우\n이용 제한과 페널티가 부여되니\n사유에 대해 성실하게 소명해 주세요`}
        closeButtonName="확인"
        onClose={handleClose}
      />
    </>
  );
}
