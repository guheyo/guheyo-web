import { useFindGroupQuery } from '@/generated/graphql';
import { usePathname } from 'next/navigation';

export const useGroup = () => {
  const pathname = usePathname();
  const match = /\/g\/([\w-]*)/.exec(pathname);
  const slug = match ? match[1] : '';

  const { loading, error, data } = useFindGroupQuery({
    variables: {
      slug,
    },
  });

  const group = data?.findGroup;
  return {
    loading,
    error,
    group,
  };
};
