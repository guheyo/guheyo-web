'use client';

import { v4 as uuid4 } from 'uuid';
import { KeyboardEventHandler, useEffect, useState } from 'react';
import { CommentValues } from '@/lib/comment/comment.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CRUD } from '@/lib/crud/crud.types';
import { TextFieldProps } from '@mui/material';
import { CommentResponse } from '@/generated/graphql';
import CommentInput from './comment-input';
import CommentOutput from './comment-output';

export default function CommentCard({
  displayMenu,
  defaultMode,
  comment,
  textFieldProps,
  handleWrite,
  handleEdit,
  handleDelete,
}: {
  displayMenu: boolean;
  defaultMode: CRUD;
  comment?: CommentResponse | null;
  textFieldProps: TextFieldProps;
  handleWrite: (values: CommentValues) => void;
  handleEdit: (values: CommentValues) => void;
  handleDelete: (values: CommentValues) => void;
}) {
  const [mode, setMode] = useState<CRUD>('read');

  const { handleSubmit, control, getValues, setValue } = useForm<CommentValues>(
    {
      defaultValues: {
        id: undefined,
        content: undefined,
      },
    },
  );

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

  useEffect(() => {
    if (!comment) {
      setValue('id', uuid4());
    } else {
      setValue('id', comment.id);
      setValue('content', comment.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment]);

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

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      handleSubmitValid(getValues(), event);
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
            ...textFieldProps,
            onKeyDown: handleKeyDown,
          }}
        />
      </form>
    );
  }

  return (
    <CommentOutput
      content={comment?.content}
      createdAt={comment?.createdAt}
      updatedAt={comment?.updatedAt}
      displayMenu={displayMenu}
      handleMenuClick={handleMenuClick}
    />
  );
}
