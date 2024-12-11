'use client';

import Term from '@/components/term/term';
import { use } from 'react';

export default function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = use(params);
  return <Term name={name} />;
}
