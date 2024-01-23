'use client';

import React from 'react';
import Link from 'next/link';

export default function HomeLink({ children }: { children: React.ReactNode }) {
  return <Link href="/">{children}</Link>;
}
