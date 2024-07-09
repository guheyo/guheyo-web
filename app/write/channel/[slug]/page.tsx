'use client';

import SearchGroups from '@/components/search/search-groups';
import { parseWriteLink } from '@/lib/write/parse-write-link';
import { parseWritePlaceholder } from '@/lib/write/parse-write-placeholder';
import { Suspense } from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  const generateLink = (slug: string) =>
    parseWriteLink({ groupSlug: slug, channelSlug: params.slug });

  return (
    <Suspense>
      <SearchGroups
        placeholder={parseWritePlaceholder({ channelSlug: params.slug })}
        generateLink={generateLink}
      />
    </Suspense>
  );
}
