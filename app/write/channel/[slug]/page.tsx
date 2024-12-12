'use client';

import SearchGroups from '@/components/search/search-groups';
import { parseWriteLink } from '@/lib/write/parse-write-link';
import { parseWritePlaceholder } from '@/lib/write/parse-write-placeholder';
import { Suspense, use } from 'react';

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: channelSlug } = use(params);
  const generateLink = (slug: string) =>
    parseWriteLink({ groupSlug: slug, channelSlug });

  return (
    <Suspense>
      <SearchGroups
        placeholder={parseWritePlaceholder({ channelSlug })}
        generateLink={generateLink}
      />
    </Suspense>
  );
}
