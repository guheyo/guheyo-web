'use client';

import { AuthorResponse } from '@/generated/graphql';
import { ThreadValues } from '@/lib/thread/thread.types';
import parseCreateThreadInput from '@/lib/thread/parse-create-thread-input';
import { useContext, useState } from 'react';
import { createThread } from '@/lib/api/thread';
import CategorySelector from '../categories/category-selector';
import GroupSelector from '../groups/group-selector';
import ThreadCard from './thread-card';
import { AuthContext } from '../auth/auth.provider';
import BrandSelector from '../brand/brand-selector';

export default function ThreadCardContainer({
  user,
  defaultGroupId,
  categoryTypes,
  defaultBrandId,
}: {
  user?: AuthorResponse;
  defaultGroupId?: string;
  categoryTypes?: string[];
  defaultBrandId?: string;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const [groupId, setGroupId] = useState<string | undefined>(defaultGroupId);
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [brandId, setBrandId] = useState<string | undefined>(defaultBrandId);
  const [focused, setFocused] = useState(false);

  const handleClickGroup = (id: string) => {
    setGroupId(id);
  };

  const handleClickCategory = (id: string) => {
    setCategoryId(id);
  };

  const handleClickBrand = (id: string) => {
    setBrandId(id);
  };

  const handleWrite = async (values: ThreadValues) => {
    if (!jwtPayload || !groupId || !categoryId || !values.content) return;

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

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      {focused && (
        <div className="flex flex-row items-center gap-2 justify-end">
          <GroupSelector
            handleClick={handleClickGroup}
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
            handleClick={handleClickCategory}
            selectedId={categoryId || ''}
          />
          {!defaultBrandId && (
            <BrandSelector
              groupId={groupId}
              handleClick={handleClickBrand}
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
        images={[]}
        reactions={[]}
        textFieldProps={{
          multiline: true,
          placeholder: '글 작성하기',
          minRows: 1,
          size: 'small',
        }}
        handleWrite={handleWrite}
        handleFocus={handleFocus}
      />
    </div>
  );
}
