'use client';

import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';
import { BrandBaseResponse } from '@/generated/graphql';
import { parseBrandHomeLink } from '@/lib/brand/parse-brand-home-link';

export default function PostBrands({
  brands,
}: {
  brands: BrandBaseResponse[];
}) {
  const router = useRouter();
  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    const slug = (e.currentTarget as HTMLButtonElement).value;
    router.push(parseBrandHomeLink({ slug }));
  };

  return (
    <>
      {brands.map((brand) => (
        <button
          key={brand.id}
          type="button"
          value={brand.slug!}
          onClick={handleClick}
          className="rounded-lg px-1 py-0.5 text-[10px] md:text-xs bg-blurple-500 text-gray-200 w-fit"
        >
          {brand.name}
        </button>
      ))}
    </>
  );
}
