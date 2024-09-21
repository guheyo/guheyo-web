'use client';

import { redirect, usePathname } from 'next/navigation';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const pathname = usePathname();
  return redirect(`${pathname}/community`);
}

export default Page;
