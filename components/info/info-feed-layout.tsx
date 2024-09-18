import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function InfoFeedLayout({ children }: Props) {
  return <div className="grid grid-cols-1 gap-2 pt-4">{children}</div>;
}

export default InfoFeedLayout;
