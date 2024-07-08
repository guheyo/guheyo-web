'use client';

import { useFindGroupQuery } from '@/generated/graphql';
import { groupVar } from '@/lib/apollo/cache';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useGroup = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const match = /\/g\/([\w-]*)/.exec(pathname);
  const slug = searchParams.get('group') || (match ? match[1] : undefined);

  const { loading, error, data } = useFindGroupQuery({
    variables: {
      slug,
    },
  });
  const group = data?.findGroup;

  useEffect(() => {
    if (group?.id) groupVar(group);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group?.id]);

  return {
    loading,
    error,
    group,
  };
};
