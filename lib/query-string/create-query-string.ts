import { ReadonlyURLSearchParams } from 'next/navigation';

export default function createQueryString({
  searchParams,
  name,
  value,
}: {
  searchParams: ReadonlyURLSearchParams;
  name: string;
  value?: string | null;
}) {
  const params = new URLSearchParams(searchParams.toString());
  if (value) {
    params.set(name, value);
  } else {
    params.delete(name);
  }
  return params.toString();
}
