import AdSense from '@/app/adsense/ad-sense';
import { parseSlugFromURL } from '@/lib/url/parse-slug-from-url';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: threadSlug } = await params;
  const slug = parseSlugFromURL(threadSlug);

  return {
    title: `${slug} | 구해요`,
    Description: `${slug} 포스트`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdSense />
      {children}
    </>
  );
}
