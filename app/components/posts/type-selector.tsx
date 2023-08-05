'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import Select from 'react-select';

type Option = {
  value: string;
  label: string;
};

const options = [
  { value: 'sell', label: '판매' },
  { value: 'buy', label: '구매' },
  { value: 'trade', label: '교환' },
];

export default function TypeSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (option: Option | null) => {
    if (!option || searchParams.get('type') === option.value) return;
    router.push(`${pathname}?type=${option.value}`);
  };

  useEffect(() => {
    if (!searchParams.has('type')) {
      router.replace(`${pathname}?type=sell`);
    }
  }, [pathname, router, searchParams]);

  return (
    <Select
      instanceId="type-selector"
      options={options}
      placeholder="판매"
      onChange={handleChange}
    />
  );
}
