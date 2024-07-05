'use client';

import SearchGroups from '@/components/search/search-groups';
import { parseWriteLink } from '@/lib/write/parse-write-link';
import { Suspense } from 'react';

export default function Page() {
  const generateLink = (slug: string) =>
    parseWriteLink({ groupSlug: slug, channelSlug: 'auction' });

  return (
    <Suspense>
      <SearchGroups
        placeholder="경매할 제품의 그룹을 선택해 주세요"
        generateLink={generateLink}
      />
    </Suspense>
  );
}
