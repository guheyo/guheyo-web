'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import { ReactNode, useContext } from 'react';
import UserReviewSubmitterNavbar from '@/components/user-review/user-review-submitter-navbar';

interface Props {
  children: ReactNode;
  params: {
    username: string;
  };
}

export default function Layout({ children, params }: Props) {
  const { jwtPayload } = useContext(AuthContext);
  const isPublic = jwtPayload?.username !== params.username;

  return (
    <div>
      <div className="flex flex-col justify-start pb-4">
        <UserReviewSubmitterNavbar isPublic={isPublic} />
      </div>
      <div className="grid gap-2 grid-cols-1">{children}</div>
    </div>
  );
}
