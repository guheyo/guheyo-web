import { ReactNode } from 'react';

function DemandLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="pb-0 md:pb-12" />
      {children}
    </>
  );
}

export default DemandLayout;
