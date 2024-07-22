import React from 'react';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';
import LoginButton from './login-button';

export default function DiscordLoginDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      className="backdrop-blur-sm"
    >
      <DialogTitle className="text-base md:text-lg text-center">
        디스코드 아이디로 로그인 해주세요
      </DialogTitle>
      <DialogActions className="flex flex-row gap-1 text-lg items-center justify-center pt-0">
        <LoginButton />
      </DialogActions>
    </Dialog>
  );
}
