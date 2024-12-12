'use client';

import { use } from 'react';
import { redirect } from 'next/navigation';

function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return redirect(`${slug}/community`);
}

export default Page;
