'use client';

import { v4 as uuid4 } from 'uuid';
import { KeyboardEventHandler, useEffect, useState } from 'react';
import { CommentValues } from '@/lib/comment/comment.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CRUD } from '@/lib/crud/crud.types';
import { TextFieldProps } from '@mui/material';
import { AuthorResponse } from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import CommentInput from './comment-input';
import CommentOutput from './comment-output';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import UserAvatar from '../users/user-avatar';

export default function CommentCard({
  user,
  displayMenu,
  defaultMode,
  commentId,
  content,
  createdAt,
  updatedAt,
  textFieldProps,
  handleWrite,
  handleEdit,
  handleDelete,
}: {
  user?: AuthorResponse;
  displayMenu: boolean;
  defaultMode: CRUD;
  commentId?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  textFieldProps: TextFieldProps;
  handleWrite: (values: CommentValues) => void;
  handleEdit: (values: CommentValues) => void;
  handleDelete: (values: CommentValues) => void;
}) {
  const [mode, setMode] = useState<CRUD>('read');
  const device = useDeviceDetect();

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
    if (!commentId) {
      setValue('id', uuid4());
    } else {
      setValue('id', commentId);
      setValue('content', content || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentId, content]);

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
    setMode('read');
  };

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      handleSubmitValid(getValues(), event);
    }
  };

  if (mode === 'create' || mode === 'update') {
    return (
      <div className="flex flex-row gap-4 items-center">
        {!user ? (
          <UserAvatar
            username="guest"
            fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
          />
        ) : (
          <UserProfileRedirectButton
            user={user}
            displayAvatar
            displayUsername={false}
            fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
          />
        )}
        <div className="w-full">
          <form onSubmit={handleSubmit(handleSubmitValid)}>
            <CommentInput
              controllerProps={{
                name: 'content',
                control,
                rules: { required: '메시지를 입력해 주세요' },
              }}
              textFieldProps={{
                ...textFieldProps,
                onKeyDown: handleKeyDown,
              }}
            />
          </form>
        </div>
      </div>
    );
  }

  if (!user) return <div />;
  return (
    <CommentOutput
      user={user}
      content={content}
      createdAt={createdAt}
      updatedAt={updatedAt}
      displayMenu={displayMenu}
      handleMenuClick={handleMenuClick}
    />
  );
}
