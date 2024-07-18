import MemberHomeFeedLayout from '@/components/member/member-home-feed.layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <MemberHomeFeedLayout>{children}</MemberHomeFeedLayout>;
}

export default Layout;
