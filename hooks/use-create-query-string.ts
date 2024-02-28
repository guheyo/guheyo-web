import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useCreateQueryString = () => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value?: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams],
  );
  return createQueryString;
};
