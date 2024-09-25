'use client';

import { redirect, usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  return redirect(`${pathname}/ranking`);
}
