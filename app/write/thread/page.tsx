'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import ThreadCardContainer from '@/components/thread/thread-card-container';
import { useFindAuthorQuery } from '@/generated/graphql';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';

export default function Page() {
  const { jwtPayload } = useContext(AuthContext);
  const searchParams = useSearchParams();
  const groupId = searchParams.get('groupId');
  const brandId = searchParams.get('brandId');

  const { data: UserData } = useFindAuthorQuery({
    variables: {
      id: jwtPayload?.id,
    },
  });
  const user = UserData?.findAuthor;

  return (
    <ThreadCardContainer
      user={user || undefined}
      defaultGroupId={groupId || undefined}
      categoryTypes={['community']}
      defaultBrandId={brandId || undefined}
    />
  );
}
