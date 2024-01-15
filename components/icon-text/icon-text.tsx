'use client';

import { ReactNode } from "react";

export default function IconText({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-row content-center gap-4">
      {children}
    </div>
  );
}
