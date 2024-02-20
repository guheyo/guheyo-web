import React from 'react';

function MyDemandsLayout({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-1 grid-cols-1 mx-2 md:mx-0">{children}</div>;
}

export default MyDemandsLayout;
