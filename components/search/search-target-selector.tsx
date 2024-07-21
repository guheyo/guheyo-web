'use client';

import { Option } from '@/interfaces/selector.interfaces';
import QuerySelector from '../selectors/query-selector';

export default function SearchTargetSelector({
  options,
}: {
  options: Option[];
}) {
  return (
    <QuerySelector
      queryKey="target"
      defaultValue="all"
      options={options}
      inputClassName="px-3 py-3 text-sm md:text-sm w-18 md:w-20"
    />
  );
}
