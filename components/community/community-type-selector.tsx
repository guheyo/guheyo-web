'use client';

import { SelectChangeEvent } from '@mui/material';
import React from 'react';
import { COMMUNITY_TYPE_OPTIONS } from '@/lib/community/community.constants';
import { CommunityType } from '@/lib/community/community.types';
import BaseSelector from '../selectors/base-selector';

export default function CommunityTypeSelector({
  onChange,
  communityType,
}: {
  onChange: (communityType: CommunityType) => void;
  communityType: CommunityType;
}) {
  const handleChange = (e: SelectChangeEvent) => {
    const selectedcommunityType = e.target.value as CommunityType;
    onChange(selectedcommunityType);
  };

  return (
    <BaseSelector
      name="community"
      selectedValue={communityType}
      options={COMMUNITY_TYPE_OPTIONS}
      inputClassName="className: 'px-3 py-2 text-xs md:text-base"
      handleChange={handleChange}
    />
  );
}
