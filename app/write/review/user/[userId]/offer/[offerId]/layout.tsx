import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="w-full lg:w-3/4">{children}</div>;
}
