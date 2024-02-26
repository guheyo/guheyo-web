'use client';

import QuerySelector from './query-selector';

const PERIOD_OPTIONS = [
  {
    value: 'all',
    label: '모든 날짜',
  },
  {
    value: '1w',
    label: '지난 1주',
  },
  {
    value: '1m',
    label: '지난 1개월',
  },
  {
    value: '1y',
    label: '지난 1년',
  },
];

export default function PeriodSelector() {
  return (
    <QuerySelector
      queryKey="period"
      defaultValue="all"
      options={PERIOD_OPTIONS}
      inputClassName="px-3 py-2 text-xs md:text-base w-16 md:w-20"
    />
  );
}
