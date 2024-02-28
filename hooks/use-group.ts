import { useFindGroupQuery } from '@/generated/graphql';
import { groupVar } from '@/lib/apollo/cache';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const useGroup = () => {
  const pathname = usePathname();
  const match = /\/g\/([\w-]*)/.exec(pathname);
  const slug = match ? match[1] : '';

  const { loading, error, data } = useFindGroupQuery({
    variables: {
      slug,
    },
  });

  useEffect(() => {
    groupVar(data?.findGroup);
  }, [data?.findGroup]);

  const group = data?.findGroup;
  return {
    loading,
    error,
    group,
  };
};
