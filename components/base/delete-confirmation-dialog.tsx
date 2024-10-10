import * as React from 'react';
import BgDialog from './bg-dialog';

export default function DeleteConfirmationDialog({
  open,
  title,
  content,
  onClose,
  onConfirm,
}: {
  open: boolean;
  title: string;
  content: string;
  onClose: React.MouseEventHandler;
  onConfirm: React.MouseEventHandler;
}) {
  return (
    <BgDialog
      open={open}
      title={title}
      content={content}
      closeButtonName="취소"
      confirmButtonName="삭제"
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
}
