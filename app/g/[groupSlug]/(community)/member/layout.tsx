import UserFeedLayout from '@/components/users/user-feed-layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex justify-center">
      <div className="grid max-w-3xl w-full">
        <UserFeedLayout>{children}</UserFeedLayout>
      </div>
    </div>
  );
}

export default Layout;
