import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 px-4 md:px-0 pb-10">{children}</div>;
}
