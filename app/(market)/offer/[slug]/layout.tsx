import { parseSlugFromURL } from '@/lib/url/parse-slug-from-url';
import { ReactNode } from 'react';

export async function generateMetadata({ params }: { params: any }) {
  const { slug: offerSlug } = params;
  const slug = parseSlugFromURL(offerSlug);

  return {
    title: `${slug} | 구해요`,
    Description: `${slug}`,
  };
}

function Layout({ children }: { children: ReactNode }) {
  return <div className="pb-4">{children}</div>;
}

export default Layout;
