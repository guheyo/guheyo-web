export default function createQueryString({
  searchParamsString,
  name,
  value,
}: {
  searchParamsString: string;
  name: string;
  value?: string | null;
}) {
  const params = new URLSearchParams(searchParamsString);

  if (value) {
    params.set(name, value);
  } else {
    params.delete(name);
  }
  return params.toString();
}
