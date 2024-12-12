import { parseSlugFromURL } from '@/lib/url/parse-slug-from-url';
import { ReactNode } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: offerSlug } = await params;
  const slug = parseSlugFromURL(offerSlug);

  return {
    title: `${slug} | 구해요`,
    Description: `${slug}`,
  };
}

function Layout({ children }: { children: ReactNode }) {
  return children;
}

export default Layout;
