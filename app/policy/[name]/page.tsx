'use client';

import Term from '@/components/term/term';

export default function Page({
  params: { name },
}: {
  params: {
    name: string;
  };
}) {
  return <Term name={name} />;
}
