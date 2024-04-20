import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function UserFeedLayout({ children }: Props) {
  return <div className="grid gap-1 grid-cols-1 pt-4">{children}</div>;
}

export default UserFeedLayout;
