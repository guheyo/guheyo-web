'use client';

import { v4 as uuid4 } from 'uuid';
import { useEffect, useState } from 'react';
import { CommentValues } from '@/lib/comment/comment.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { parseCommentPlaceholder } from '@/lib/comment/parse-comment-placeholder';
import { CRUD } from '@/lib/crud/crud.types';
import CommentInput from './comment-input';
import CommentOutput from './comment-output';

export default function CommentCard({
  displayMenu,
  defaultMode,
  content,
  createdAt,
  handleWrite,
  handleEdit,
  handleDelete,
}: {
  displayMenu: boolean;
  defaultMode: CRUD;
  content?: string;
  createdAt?: Date;
  handleWrite: (values: CommentValues) => void;
  handleEdit: (values: CommentValues) => void;
  handleDelete: (values: CommentValues) => void;
}) {
  const [mode, setMode] = useState<CRUD>('read');

  const { handleSubmit, control, getValues } = useForm<CommentValues>({
    defaultValues: {
      id: uuid4(),
      content: content || '',
    },
  });

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

  const handleMenuClick = (newMode: CRUD) => {
    if (newMode === 'delete') {
      handleDelete(getValues());
    }
    setMode(newMode);
  };

  const handleSubmitValid: SubmitHandler<CommentValues> = (values) => {
    if (mode === 'create') {
      handleWrite(values);
    } else if (mode === 'update') {
      handleEdit(values);
    }
  };

  if (mode === 'create' || mode === 'update') {
    return (
      <form onSubmit={handleSubmit(handleSubmitValid)}>
        <CommentInput
          controllerProps={{
            name: 'content',
            control,
            rules: { required: '댓글을 입력해 주세요' },
          }}
          textFieldProps={{
            multiline: true,
            placeholder: parseCommentPlaceholder(content),
            minRows: 2,
            size: 'small',
          }}
        />
      </form>
    );
  }

  return (
    <CommentOutput
      content={content}
      createdAt={createdAt}
      displayMenu={displayMenu}
      handleMenuClick={handleMenuClick}
    />
  );
}
