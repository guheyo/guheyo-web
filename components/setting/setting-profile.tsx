'use client';

import { useFindMyUserQuery } from '@/generated/graphql';
import SettingProfileForm from './setting-profile-form';
import { ProfileFormValues } from './setting.interfaces';

export default function SettingProfile({ userId }: { userId: string }) {
  const { data, loading } = useFindMyUserQuery({
    variables: {
      id: userId,
    },
  });

  if (loading) return <div />;
  if (!data?.findMyUser) return <div />;
  const user = data.findMyUser;

  const prevFormValues: ProfileFormValues = {
    id: user.id,
    about: user.about || '',
  };

  return (
    <div>
      <SettingProfileForm prevFormValues={prevFormValues} />
    </div>
  );
}
