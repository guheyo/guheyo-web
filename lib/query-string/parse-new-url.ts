import createQueryString from './create-query-string';

export const parseNewURL = ({
  searchParamsString,
  pathname,
  paramsToUpdate,
}: {
  searchParamsString: string;
  pathname: string;
  paramsToUpdate: { name: string; value?: string | null }[];
}) => {
  const queryString = createQueryString({
    searchParamsString,
    paramsToUpdate,
  });

  return `${pathname}?${queryString}`;
};
