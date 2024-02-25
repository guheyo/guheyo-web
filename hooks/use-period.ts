import { useQueryString } from './use-query-string';

export const usePeriod = () => {
  const queryString = useQueryString({ key: 'period', defaultValue: 'all' });
  return queryString;
};
