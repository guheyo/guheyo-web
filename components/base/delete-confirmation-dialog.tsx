import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function DeleteConfirmationDialog({
  open,
  dialogTitle,
  onClose,
  onConfirm,
}: {
  open: boolean;
  dialogTitle: string;
  onClose: React.MouseEventHandler;
  onConfirm: React.MouseEventHandler;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText className="text-base md:text-lg text-dark-500 font-medium">
          {dialogTitle}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <div className="flex justify-between w-full px-4 pb-3">
          <Button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-dark-500 font-semibold"
          >
            취소
          </Button>
          <Button
            onClick={onConfirm}
            autoFocus
            className="bg-gray-800 hover:bg-gray-900 text-gray-300 font-semibold"
          >
            삭제
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}
