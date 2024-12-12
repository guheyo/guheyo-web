import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  return {
    title: `${username} | 구해요`,
    Description: `${username}님의 최신글과 프로필을 확인하세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
