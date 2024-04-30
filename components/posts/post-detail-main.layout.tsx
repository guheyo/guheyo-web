'use client';

import { ReactNode } from 'react';

export default function PostDetailMainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="px-4 md:px-0">{children}</div>;
}
