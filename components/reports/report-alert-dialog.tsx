/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function ReportAlertDialog({
  reportCount,
  uncommentedReportCount,
}: {
  reportCount: number;
  uncommentedReportCount: number;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
          <DialogContentText className="text-base md:text-lg text-dark-500 font-medium">
            [신고 알림] 신고 사유에 대한 소명서를 제출해 주세요
            <br />
            {`(미응답 ${uncommentedReportCount}건 / 누적 ${reportCount}건)`}
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
