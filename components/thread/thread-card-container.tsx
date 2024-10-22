'use client';

import { AuthorResponse, UserImageResponse } from '@/generated/graphql';
import { ThreadMode, ThreadValues } from '@/lib/thread/thread.types';
import parseCreateThreadInput from '@/lib/thread/parse-create-thread-input';
import { useContext, useState } from 'react';
import {
  createThread,
  findThreadPreview,
  updateThread,
} from '@/lib/api/thread';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import { parseUrlSegments } from '@/lib/group/parse-url-segments';
import { updateCacheWithNewThread } from '@/lib/apollo/cache/thread';
import { EDITOR_ACTIONS } from '@/lib/write/write.constants';
import CategorySelector from '../categories/category-selector';
import GroupAutocomplete from '../groups/group-autocomplete';
import ThreadCard from './thread-card';
import { AuthContext } from '../auth/auth.provider';
import BrandAutocomplete from '../brand/brand-autocomplete';
import BgDialog from '../base/bg-dialog';

export default function ThreadCardContainer({
  defaultMode,
  user,
  threadId,
  defaultGroupId,
  defaultCategoryId,
  defaultCategoryTypes,
  defaultBrandId,
  defaultContent,
  defaultImages,
}: {
  defaultMode: ThreadMode;
  user?: AuthorResponse;
  threadId?: string;
  defaultGroupId?: string;
  defaultCategoryId?: string;
  defaultCategoryTypes?: string[];
  defaultBrandId?: string;
  defaultContent?: string;
  defaultImages: UserImageResponse[];
}) {
  const { jwtPayload } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();
  const { groupSlug, channelSlug, identifier, view } =
    parseUrlSegments(pathname);

  const searchParams = useSearchParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [groupId, setGroupId] = useState<string | undefined>(
    searchParams.get('groupId') || defaultGroupId,
  );
  const [categoryId, setCategoryId] = useState<string | undefined>(
    defaultCategoryId,
  );
  const [brandId, setBrandId] = useState<string | undefined>(
    searchParams.get('brandId') || defaultBrandId,
  );
  const [isInputFocused, setIsInputFocused] = useState(
    defaultMode === 'update',
  );
  const categoryTypes =
    searchParams.get('categoryTypes')?.split(',') || defaultCategoryTypes;

  const navigateToChannel = () => {
    router.push(
      parseChannelLink({
        groupSlug,
        channelSlug: EDITOR_ACTIONS.includes(channelSlug)
          ? categoryTypes?.at(0) || ''
          : channelSlug,
        identifier: EDITOR_ACTIONS.includes(channelSlug)
          ? undefined
          : identifier,
        view: EDITOR_ACTIONS.includes(channelSlug) ? undefined : view,
      }),
    );
  };

  const handleGroupSelect = (id: string) => {
    setGroupId(id);
  };

  const handleCategorySelect = (id: string) => {
    setCategoryId(id);
  };

  const handleBrandSelect = (id: string) => {
    setBrandId(id);
  };

  const handleWrite = async (values: ThreadValues) => {
    if (!jwtPayload || !groupId || !values.content) {
      if (!jwtPayload) setAlertMessage('로그인해 주세요');
      else if (!groupId) setAlertMessage('그룹을 선택해 주세요');
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

    const { data } = await findThreadPreview(values.id);
    if (data.findThreadPreview)
      updateCacheWithNewThread(data.findThreadPreview);

    navigateToChannel();
  };

  const handleEdit = async (values: ThreadValues) => {
    if (!values.content) return;

    await updateThread({
      id: values.id,
      content: values.content,
      post: {
        categoryId: values.categoryId,
      },
    });

    await findThreadPreview(values.id);

    navigateToChannel();
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
          <GroupAutocomplete
            handleClick={handleGroupSelect}
            defaultWhere={{
              groupIds: defaultGroupId ? [defaultGroupId] : undefined,
              brandIds: defaultBrandId ? [defaultBrandId] : undefined,
            }}
            selectedId={groupId || ''}
            setGroupId={setGroupId}
          />
          {categoryTypes?.includes('gb') && (
            <CategorySelector
              groupId={groupId}
              categoryTypes={categoryTypes}
              handleClick={handleCategorySelect}
              selectedId={categoryId || ''}
              setCategoryId={setCategoryId}
            />
          )}
          {!defaultBrandId && (
            <BrandAutocomplete
              groupId={groupId}
              handleClick={handleBrandSelect}
              selectedId={brandId}
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
        defaultMode={defaultMode}
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
        handleWrite={handleWrite}
        handleEdit={handleEdit}
        handleFocus={handleInputFocus}
      />
      <BgDialog
        open={isDialogOpen}
        title="정보 누락"
        content={alertMessage}
        closeButtonName="확인"
        onClose={handleDialogClose}
      />
    </div>
  );
}
