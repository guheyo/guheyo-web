'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CommunityType } from '@/lib/community/community.types';
import CommunityTypeSelector from './community-type-selector';

function CommunityTypePathUpdater() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const communityType = pathname.split('/').at(-1) as CommunityType;

  const handleCommunityTypeChange = (
    selectedCommunityType: CommunityType,
  ): void => {
    const params = new URLSearchParams(searchParams.toString());
    const segments = pathname.split('/');
    segments[segments.length - 1] = selectedCommunityType;
    const newURL = segments.join('/');

    router.push(`${newURL}?${params.toString()}`);
  };

  return (
    <CommunityTypeSelector
      onChange={handleCommunityTypeChange}
      communityType={communityType}
    />
  );
}

export default CommunityTypePathUpdater;
