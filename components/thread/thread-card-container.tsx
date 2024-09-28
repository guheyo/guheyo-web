'use client';

import { AuthorResponse, UserImageResponse } from '@/generated/graphql';
import { ThreadValues } from '@/lib/thread/thread.types';
import parseCreateThreadInput from '@/lib/thread/parse-create-thread-input';
import { useContext, useState } from 'react';
import { createThread } from '@/lib/api/thread';
import CategorySelector from '../categories/category-selector';
import GroupSelector from '../groups/group-selector';
import ThreadCard from './thread-card';
import { AuthContext } from '../auth/auth.provider';
import BrandSelector from '../brand/brand-selector';
import AlertDialog from '../base/alert-dialog';

export default function ThreadCardContainer({
  user,
  threadId,
  defaultGroupId,
  defaultCategoryId,
  categoryTypes,
  defaultBrandId,
  defaultContent,
  defaultImages,
}: {
  user?: AuthorResponse;
  threadId?: string;
  defaultGroupId?: string;
  defaultCategoryId?: string;
  categoryTypes?: string[];
  defaultBrandId?: string;
  defaultContent?: string;
  defaultImages: UserImageResponse[];
}) {
  const { jwtPayload } = useContext(AuthContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [groupId, setGroupId] = useState<string | undefined>(defaultGroupId);
  const [categoryId, setCategoryId] = useState<string | undefined>(
    defaultCategoryId,
  );
  const [brandId, setBrandId] = useState<string | undefined>(defaultBrandId);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleGroupSelect = (id: string) => {
    setGroupId(id);
  };

  const handleCategorySelect = (id: string) => {
    setCategoryId(id);
  };

  const handleBrandSelect = (id: string) => {
    setBrandId(id);
  };

  const handleSubmit = async (values: ThreadValues) => {
    if (!jwtPayload || !groupId || !categoryId || !values.content) {
      if (!jwtPayload) setAlertMessage('로그인해 주세요');
      else if (!groupId) setAlertMessage('그룹을 선택해 주세요');
      else if (!categoryId) setAlertMessage('카테고리를 선택해 주세요');
      else if (!values.content) setAlertMessage('내용을 작성해 주세요');
      setIsDialogOpen(true);
      return;
    }

    const input = parseCreateThreadInput({
      threadValues: {
        ...values,
        groupId,
        categoryId,
        brandId,
      },
    });
    await createThread(input);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      {isInputFocused && (
        <div className="flex flex-row items-center gap-2 justify-end pb-2">
          <GroupSelector
            handleClick={handleGroupSelect}
            defaultWhere={{
              groupIds: defaultGroupId ? [defaultGroupId] : undefined,
              brandIds: defaultBrandId ? [defaultBrandId] : undefined,
            }}
            selectedId={groupId || ''}
            setGroupId={setGroupId}
          />
          <CategorySelector
            groupId={groupId}
            categoryTypes={categoryTypes}
            handleClick={handleCategorySelect}
            selectedId={categoryId || ''}
            setCategoryId={setCategoryId}
          />
          {!defaultBrandId && (
            <BrandSelector
              groupId={groupId}
              handleClick={handleBrandSelect}
              selectedId={brandId || ''}
            />
          )}
        </div>
      )}
      <ThreadCard
        user={user || undefined}
        isCurrentUser
        isAuthor={!!user?.id}
        displayMenu
        displayImagesInput
        defaultMode="create"
        threadId={threadId}
        content={defaultContent}
        images={defaultImages}
        reactions={[]}
        textFieldProps={{
          multiline: true,
          placeholder: '글 작성하기',
          minRows: 1,
          size: 'small',
        }}
        handleWrite={handleSubmit}
        handleFocus={handleInputFocus}
      />
      <AlertDialog
        open={isDialogOpen}
        text={alertMessage}
        handleClose={handleDialogClose}
      />
    </div>
  );
}
