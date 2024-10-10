'use client';

import { CITIY_NAMES } from '@/lib/community/community.constants';
import QuerySelector from './query-selector';

export default function CitySelector() {
  const options = [
    {
      value: 'all',
      label: '모든 지역',
    },
    ...CITIY_NAMES.map((city) => ({
      value: city,
      label: city,
    })),
  ];

  return (
    <QuerySelector
      queryKey="tag"
      defaultValue="all"
      options={options}
      inputClassName=""
    />
  );
}
