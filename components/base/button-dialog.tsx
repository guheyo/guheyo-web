import * as React from 'react';
import BgDialog from './bg-dialog';

export default function ButtonDialog({
  buttonName,
  title,
  content,
  closeButtonName,
  confirmButtonName,
  onClose,
  onConfirm,
}: {
  buttonName: string;
  title: string;
  content: string;
  closeButtonName?: string;
  confirmButtonName?: string;
  onClose?: React.MouseEventHandler;
  onConfirm?: React.MouseEventHandler;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose: React.MouseEventHandler = (e) => {
    e.preventDefault();
    if (onClose) onClose(e);
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleClickOpen} className="w-full">
        {buttonName}
      </button>
      <BgDialog
        open={open}
        title={title}
        content={content}
        closeButtonName={closeButtonName}
        confirmButtonName={confirmButtonName}
        onClose={handleClose}
        onConfirm={onConfirm}
      />
    </>
  );
}
