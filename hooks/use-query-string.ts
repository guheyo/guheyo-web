import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCreateQueryString } from './use-create-query-string';

export const useQueryString = ({
  key,
  defaultValue,
}: {
  key: string;
  defaultValue: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useCreateQueryString();
  const searchParams = useSearchParams();
  const value = searchParams.get(key);

  if (!value) {
    return router.push(`${pathname}?${createQueryString(key, defaultValue)}`);
  }

  return value;
};
