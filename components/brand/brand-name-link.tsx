import Link from 'next/link';
import { parseBrandHomeLink } from '@/lib/brand/parse-brand-home-link';

export default function BrandNameLink({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  return <Link href={parseBrandHomeLink({ slug })}>{name}</Link>;
}
