'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import ThreadCardContainer from '@/components/thread/thread-card-container';
import { useFindAuthorQuery } from '@/generated/graphql';
import { Suspense, useContext } from 'react';

export default function Page() {
  const { jwtPayload } = useContext(AuthContext);

  const { data: UserData } = useFindAuthorQuery({
    variables: {
      id: jwtPayload?.id,
    },
  });
  const user = UserData?.findAuthor;

  return (
    <Suspense>
      <ThreadCardContainer user={user || undefined} defaultImages={[]} />
    </Suspense>
  );
}
