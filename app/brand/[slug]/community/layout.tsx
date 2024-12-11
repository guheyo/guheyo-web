import { ReactNode } from 'react';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return {
    title: `${slug} | 구해요`,
    Description: `${slug} 커뮤니티`,
  };
}

function Layout({ children }: { children: ReactNode }) {
  return children;
}

export default Layout;
