'use client';

import { ReactNode } from 'react';

export default function OfferBumpFormLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="flex justify-center pt-4 md:pt-6">{children}</div>;
}
