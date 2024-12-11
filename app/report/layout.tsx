import { ReactNode } from 'react';

export async function generateMetadata() {
  return {
    title: '신고 | 구해요',
    Description: '신고 사유와 신고당한 유저의 소명 댓글을 확인해 주세요',
  };
}

function Layout({ children }: { children: ReactNode }) {
  return <div className="pt-0 md:pt-0">{children}</div>;
}

export default Layout;
