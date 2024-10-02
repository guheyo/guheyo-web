import { BrandBaseResponse } from '@/generated/graphql';
import { parseBrandHomeLink } from '@/lib/brand/parse-brand-home-link';
import Link from 'next/link';

export default function PostBrands({
  brands,
}: {
  brands: BrandBaseResponse[];
}) {
  return (
    <>
      {brands.map((brand) => (
        <Link
          key={brand.id}
          href={parseBrandHomeLink({ slug: brand.slug! })}
          className="rounded-lg px-1 py-0.5 text-[10px] md:text-xs bg-blurple-500 text-gray-200"
        >
          {brand.name}
        </Link>
      ))}
    </>
  );
}
