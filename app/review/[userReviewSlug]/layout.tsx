import { parseSlugFromURL } from '@/lib/url/parse-slug-from-url';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ userReviewSlug: string }>;
}) {
  const { userReviewSlug } = await params;
  const slug = parseSlugFromURL(userReviewSlug);

  return {
    title: `${slug} | 구해요`,
    Description: `${slug} 거래 후기`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
