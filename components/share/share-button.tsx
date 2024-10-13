'use client';

import ReplyIcon from '@mui/icons-material/Reply';
import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import BgDialog from '../base/bg-dialog';

export default function ShareButton({
  displayLabel,
}: {
  displayLabel: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleShare = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setMessage(`페이지 주소가 복사되었어요! 붙여넣기로 공유해요`);
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
        {displayLabel ? (
          <button
            type="button"
            onClick={handleShare}
            className="flex flex-row gap-1 items-center text-gray-300 hover:text-gray-400 text-base md:text-lg"
          >
            <ReplyIcon className="transform scale-x-[-1]" />
            공유
          </button>
        ) : (
          <IconButton
            onClick={handleShare}
            className="text-gray-300 hover:text-gray-400 text-base md:text-lg"
          >
            <ReplyIcon className="transform scale-x-[-1]" />
          </IconButton>
        )}
      </Tooltip>
      <BgDialog
        open={open}
        title="공유하기"
        content={message}
        closeButtonName="확인"
        onClose={handleClose}
      />
    </>
  );
}
