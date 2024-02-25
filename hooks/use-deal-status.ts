import { useQueryString } from './use-query-string';

export const useDealStatus = () => {
  const queryString = useQueryString({ key: 'status', defaultValue: 'OPEN' });
  return queryString;
};
