import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function InfoFeedLayout({ children }: Props) {
  return <div className="grid gap-2 grid-cols-1 pt-4">{children}</div>;
}

export default InfoFeedLayout;
