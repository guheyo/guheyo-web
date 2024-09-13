import { BrandResponse } from '@/generated/graphql';
import Link from 'next/link';
import { parseBrandHomeLink } from '@/lib/brand/parse-brand-home-link';

export default function BrandNameLink({ brand }: { brand: BrandResponse }) {
  return (
    <Link href={parseBrandHomeLink({ slug: brand.slug! })}>{brand.name}</Link>
  );
}
