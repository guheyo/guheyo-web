'use client';

import { PROVIDER_OPTIONS } from '@/lib/social/social.constants';
import QuerySelector from '../selectors/query-selector';

export default function ProviderSelector() {
  return (
    <QuerySelector
      queryKey="provider"
      defaultValue="all"
      options={PROVIDER_OPTIONS}
      inputClassName=""
    />
  );
}
