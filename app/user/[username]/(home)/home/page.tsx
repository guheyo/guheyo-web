'use client';

import MyUserProfile from '@/components/users/my-user-profile';
import { useFindMyUserByUsernameQuery } from '@/generated/graphql';

function Page({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const { loading, data } = useFindMyUserByUsernameQuery({
    variables: {
      username,
    },
  });

  if (loading) return <div />;
  if (!data?.findMyUserByUsername) return <div />;

  const user = data.findMyUserByUsername;
  return <MyUserProfile user={user} />;
}

export default Page;
