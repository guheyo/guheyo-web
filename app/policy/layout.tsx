import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto mt-8 px-4 md:px-0 pb-12">{children}</div>
  );
}
