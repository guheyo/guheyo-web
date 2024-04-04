import { Dialog, DialogContent, DialogContentText } from '@mui/material';
import { MouseEventHandler } from 'react';

export default function AlertDialog({
  open,
  text,
  handleClose,
}: {
  open: boolean;
  text: string;
  handleClose: MouseEventHandler;
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <DialogContentText className="text-base md:text-lg text-dark-500 min-w-32 p-2 font-medium">
          {text}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
