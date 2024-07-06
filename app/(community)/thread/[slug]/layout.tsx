import { parseSlugFromURL } from '@/lib/url/parse-slug-from-url';
import React from 'react';

export async function generateMetadata({ params }: { params: any }) {
  const { userReviewSlug } = params;
  const slug = parseSlugFromURL(userReviewSlug);

  return {
    title: `${slug} | 구해요`,
    Description: `${slug} 포스트`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
