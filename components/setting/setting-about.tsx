'use client';

import { useFindMyUserQuery } from '@/generated/graphql';
import { AboutFormValues } from './setting.interfaces';
import SettingAboutForm from './setting-about-form';

export default function SettingAbout({ userId }: { userId: string }) {
  const { data, loading } = useFindMyUserQuery({
    variables: {
      id: userId,
    },
    fetchPolicy: 'network-only',
  });

  if (loading) return <div />;
  if (!data?.findMyUser) return <div />;
  const user = data.findMyUser;

  const prevFormValues: AboutFormValues = {
    id: user.id,
    about: user.about || '',
  };

  return (
    <div>
      <SettingAboutForm prevFormValues={prevFormValues} />
    </div>
  );
}
