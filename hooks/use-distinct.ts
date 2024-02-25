import { useQueryString } from './use-query-string';

export const useDistinct = () => {
  const queryString = useQueryString({ key: 'distinct', defaultValue: 'true' });
  return queryString === 'true';
};
