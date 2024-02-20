import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useDealStatus = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dealStatus = searchParams.get('status');
  if (!dealStatus) {
    return router.push(`${pathname}?status=OPEN`);
  }

  return dealStatus;
};
