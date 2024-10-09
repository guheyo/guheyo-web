import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogTitle } from '@mui/material';

export default function BgDialog({
  open,
  title,
  content,
  closeButtonName,
  confirmButtonName,
  onClose,
  onConfirm,
}: {
  open: boolean;
  title: string;
  content: string;
  closeButtonName?: string;
  confirmButtonName?: string;
  onClose?: React.MouseEventHandler;
  onConfirm?: React.MouseEventHandler;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-base font-medium text-dark-500">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText className="text-sm text-dark-500 font-medium">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <div className="flex justify-end gap-2 w-full p-0">
          {onClose && closeButtonName && (
            <Button
              onClick={onClose}
              className="hover:bg-blurple-200 rounded-full text-blurple-500 font-medium"
            >
              {closeButtonName}
            </Button>
          )}
          {onConfirm && confirmButtonName && (
            <Button
              onClick={onConfirm}
              autoFocus
              className="hover:bg-blurple-200 rounded-full text-blurple-500 font-medium"
            >
              {confirmButtonName}
            </Button>
          )}
        </div>
      </DialogActions>
    </Dialog>
  );
}
