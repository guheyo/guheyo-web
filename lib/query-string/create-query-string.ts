export default function createQueryString({
  searchParamsString,
  paramsToUpdate,
}: {
  searchParamsString: string;
  paramsToUpdate: { name: string; value?: string | null }[];
}) {
  const params = new URLSearchParams(searchParamsString);

  paramsToUpdate.forEach(({ name, value }) => {
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
  });

  return params.toString();
}
