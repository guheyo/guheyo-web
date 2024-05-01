import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function PostDeleteDialog({
  handleDelete,
}: {
  handleDelete: React.MouseEventHandler;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleClickOpen} className="w-full">
        삭제
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText className="text-base md:text-lg text-dark-500 font-medium">
            게시글을 삭제할까요?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="flex justify-between w-full px-4 pb-3">
            <Button
              onClick={handleClose}
              className="bg-gray-200 hover:bg-gray-300 text-dark-500 font-semibold"
            >
              취소
            </Button>
            <Button
              onClick={handleDelete}
              autoFocus
              className="bg-star-500 hover:bg-star-400 text-gray-300 font-semibold"
            >
              삭제
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
