'use client';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

export default function PostDialog({
  open,
  handleOpen,
  handleClose,
  children,
}: {
  open: boolean;
  handleOpen: React.MouseEventHandler;
  handleClose: React.MouseEventHandler;
  children: ReactNode;
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        top: isMobile ? '0px' : '56px',
      }}
      className="max-w-screen"
      slotProps={{
        backdrop: {
          sx: {
            background: '#323338',
            top: '56px',
          },
        },
      }}
      PaperProps={{
        sx: {
          overflow: 'unset',
          margin: 0,
          width: '100%',
          maxWidth: '64rem',
          height: isMobile ? '100%' : '96%',
          maxHeight: '100%',
          boxShadow: '0',
          borderRadius: '0',
          background: '#323338',
        },
      }}
    >
      <DialogContent className="p-0 overflow-auto md:overflow-hidden bg-dark-400 text-light-200 rounded-none md:rounded-lg">
        <div className="flex justify-end">
          <IconButton onClick={handleOpen}>
            <XMarkIcon className="w-6 md:w-9 text-dark-200 hover:text-light-200 bg-dark-400 rounded-lg" />
          </IconButton>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
}
