'use client';

import QuerySelector from './query-selector';

const DISTINCT_OPTIONS = [
  {
    value: 'true',
    label: '중복 제거',
  },
  {
    value: 'false',
    label: '중복 포함',
  },
];

export default function DistinctSelector() {
  return (
    <QuerySelector
      queryKey="distinct"
      defaultValue="true"
      options={DISTINCT_OPTIONS}
      inputClassName="px-3 py-2 text-xs md:text-sm"
    />
  );
}
