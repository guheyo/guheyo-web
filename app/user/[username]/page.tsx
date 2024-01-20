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
  const { loading, error, data } = useFindMyUserByUsernameQuery({
    variables: {
      username,
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!data?.findMyUserByUsername) return <div>null</div>;

  const user = data.findMyUserByUsername;

  return (
    <div className="max-w-md text-light-200 mx-2 md:mx-0">
      <MyUserProfile user={user} />
    </div>
  );
}

export default Page;
