import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCreateQueryString } from './use-create-query-string';

export const useDealStatus = () => {
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useCreateQueryString();
  const searchParams = useSearchParams();
  const dealStatus = searchParams.get('status');

  if (!dealStatus) {
    return router.push(`${pathname}?${createQueryString('status', 'OPEN')}`);
  }

  return dealStatus;
};
