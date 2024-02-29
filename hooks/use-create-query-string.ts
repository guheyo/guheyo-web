import { ReadonlyURLSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useCreateQueryString = () => {
  const createQueryString = useCallback(
    (
      searchParms: ReadonlyURLSearchParams,
      name: string,
      value?: string | null,
    ) => {
      const params = new URLSearchParams(searchParms.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [],
  );
  return createQueryString;
};
