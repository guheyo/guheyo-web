'use client';

import { v4 as uuid4 } from 'uuid';
import {
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
import {
  AuthorResponse,
  ReactionResponse,
  UserImageResponse,
} from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { MOBILE_FILE_INPUT_LABEL_STYLE } from '@/lib/input/input.styles';
import parseUploadedImages from '@/lib/image/parse-uploaded-user-images';
import uploadAndSaveImages from '@/lib/image/upload-and-save-images';
import { deleteUserImage } from '@/lib/api/user-image';
import { ThreadMode, ThreadValues } from '@/lib/thread/thread.types';
import { THREAD } from '@/lib/thread/thread.constants';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import Avatar from '../avatar/avatar';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';
import ImagesInput from '../inputs/images-input';
import ImagePreviews from '../images/image.previews';
import ThreadInput from './thread-input';
import ThreadOutput from './thread-output';

export default function ThreadCard({
  user,
  isCurrentUser,
  isAuthor,
  postId,
  displayMenu,
  displayImagesInput,
  defaultMode,
  threadId,
  content,
  images,
  createdAt,
  updatedAt,
  reactions,
  textFieldProps,
  handleWrite,
  handleEdit,
  handleDelete,
  handleFocus,
}: {
  user?: AuthorResponse;
  isCurrentUser: boolean;
  isAuthor: boolean;
  postId?: string;
  displayMenu: boolean;
  displayImagesInput: boolean;
  defaultMode: ThreadMode;
  threadId?: string;
  content?: string;
  images: UserImageResponse[];
  createdAt?: Date;
  updatedAt?: Date;
  reactions: ReactionResponse[];
  textFieldProps: TextFieldProps;
  handleWrite: (values: ThreadValues) => void;
  handleEdit?: (values: ThreadValues) => void;
  handleDelete?: (values: ThreadValues) => void;
  handleFocus?: () => void;
}) {
  const [mode, setMode] = useState<ThreadMode>('read');
  const device = useDeviceDetect();

  const { handleSubmit, control, watch, getValues, setValue, reset } =
    useForm<ThreadValues>({
      defaultValues: {
        id: '',
        content: '',
        images: [],
      },
    });

  const { remove } = useFieldArray({
    control,
    name: 'images',
  });

  const id = watch('id');
  const postImages = watch('images');

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

  useEffect(() => {
    if (threadId) {
      setValue('id', threadId);
      setValue('content', content || '');
      setValue('images', images);
    } else {
      setValue('id', uuid4());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadId, content]);

  const handleMenuClick = (newMode: ThreadMode) => {
    if (handleDelete && newMode === 'delete') {
      handleDelete(getValues());
    }
    setMode(newMode);
  };

  const handleSubmitValid: SubmitHandler<ThreadValues> = (values) => {
    if (mode === 'create') {
      handleWrite({
        ...values,
        id,
      });
      reset({
        id: uuid4(),
        content: '',
        images: [],
      });
    } else if (mode === 'update' && !!handleEdit) {
      handleEdit(values);
      setMode('read');
    }
  };

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.code === 'Enter') {
      event.preventDefault();
      handleSubmitValid(getValues(), event);
    }
  };

  const handleChangeFileInput = async (files: FileList | null) => {
    if (defaultMode !== 'create') return;

    if (!files?.length) return;
    if (!isCurrentUser || !user) return;

    const uploadedImages = parseUploadedImages({
      files,
      offset: postImages.length,
    });

    const userImages = await uploadAndSaveImages({
      uploadedImages,
      type: THREAD,
      refId: id,
    });

    userImages.map((userImage) =>
      setValue(`images.${userImage.position}`, userImage),
    );
  };

  const handleClickImagePreview = async (position: number) => {
    if (defaultMode !== 'create') return;

    const imageId = postImages.find((image) => image.position === position)?.id;
    if (!imageId) return;

    await deleteUserImage(imageId);
    remove(position);
  };

  const handleAuthorization: MouseEventHandler = () => {
    // Do nothing
  };

  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  if (mode === 'create' || mode === 'update') {
    return (
      <div className="flex flex-row gap-4 items-center">
        {!user ? (
          <Avatar
            name="guest"
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
        <form
          onSubmit={handleSubmit(handleSubmitValid)}
          className="w-full flex gap-4 items-end"
        >
          <div className="w-full">
            {postImages.length > 0 && (
              <div className="mb-2">
                <ImagePreviews
                  images={postImages}
                  previewsProp={{
                    onClick: handleClickImagePreview,
                  }}
                />
              </div>
            )}
            <ThreadInput
              controllerProps={{
                name: 'content',
                control,
                rules: { required: '메시지를 입력해 주세요' },
              }}
              textFieldProps={{
                ...textFieldProps,
                onKeyDown: handleKeyDown,
                onFocus: handleFocus,
              }}
            />
          </div>
          <div className="flex-none flex flex-row gap-2 items-center">
            {displayImagesInput && defaultMode === 'create' && (
              <ImagesInput
                name="images"
                control={control}
                rules={{
                  required: false,
                }}
                imagesInputProps={{
                  label: {
                    style: MOBILE_FILE_INPUT_LABEL_STYLE,
                  },
                  icon: {
                    fontSize: 'medium',
                  },
                  onChange: handleChangeFileInput,
                }}
                inputProps={{
                  multiple: true,
                  hidden: true,
                }}
              />
            )}
            <DiscordLoginDialogButton
              icon={
                <ArrowUpwardIcon className="bg-gray-600 text-gray-400 hover:text-gray-300 rounded-lg" />
              }
              onAuthorization={handleAuthorization}
              onUnAuthorization={handleOnAuthorization}
            />
          </div>
        </form>
      </div>
    );
  }

  if (!user) return <div />;

  return (
    <ThreadOutput
      user={user}
      isCurrentUser={isCurrentUser}
      isAuthor={isAuthor}
      postId={postId}
      content={content}
      images={images}
      createdAt={createdAt}
      updatedAt={updatedAt}
      displayMenu={displayMenu}
      reactions={reactions}
      editable={!!handleEdit}
      deletable={!!handleDelete}
      handleMenuClick={handleMenuClick}
    />
  );
}
