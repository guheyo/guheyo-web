'use client';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

export default function PostDialog({
  open,
  handleClose,
  children,
}: {
  open: boolean;
  handleClose: React.MouseEventHandler;
  children: ReactNode;
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        top: 0,
      }}
      className="max-w-full"
      slotProps={{
        backdrop: {
          sx: {
            background: '#323338',
            top: '48px',
          },
        },
      }}
      PaperProps={{
        sx: {
          overflow: 'unset',
          margin: 0,
          width: '100%',
          maxWidth: '64rem',
          height: isMobile ? '100%' : '80%',
          maxHeight: '100%',
          boxShadow: '0',
          background: 'none',
        },
      }}
    >
      <DialogContent className="p-0 overflow-auto md:overflow-hidden bg-dark-400 text-gray-300 rounded-none md:rounded-lg">
        <div className="flex justify-end">
          <IconButton onClick={handleClose}>
            <XMarkIcon className="w-6 md:w-9 text-dark-200 hover:text-gray-300 bg-dark-400 rounded-lg" />
          </IconButton>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
}
