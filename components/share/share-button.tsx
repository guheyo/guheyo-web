import ReplyIcon from '@mui/icons-material/Reply';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';

export default function ShareButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleShare = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setMessage(
          `${currentUrl}\n\n페이지 주소가 복사되었어요! Ctrl+V로 바로 사용하세요`,
        );
        setOpen(true);
      })
      .catch((err) => {
        setMessage('Failed to copy URL');
        setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="공유하기" placement="top">
        <IconButton
          onClick={handleShare}
          className="text-gray-400 hover:text-gray-300"
        >
          <ReplyIcon className="transform scale-x-[-1]" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>공유하기</DialogTitle>
        <DialogContent>{message}</DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            className="bg-star-500 hover:bg-star-400 text-light-200 font-semibold"
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
