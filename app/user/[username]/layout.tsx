'use client';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-md pt-0 md:pt-12 mx-2 md:mx-0">{children}</div>;
}
