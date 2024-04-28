'use client';

import React, { ReactNode } from 'react';

export default function SearchCardResultLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="p-4 bg-dark-400 rounded-lg text-light-200 ">{children}</div>
  );
}
