import * as React from 'react';
import ButtonDialog from '../base/button-dialog';

export default function PostDeleteDialog({
  handleDelete,
}: {
  handleDelete: React.MouseEventHandler;
}) {
  return (
    <ButtonDialog
      buttonName="삭제"
      title="게시글 삭제"
      content="게시글을 완전히 삭제할까요?"
      closeButtonName="취소"
      confirmButtonName="삭제"
      onClose={() => {}}
      onConfirm={handleDelete}
    />
  )
}
