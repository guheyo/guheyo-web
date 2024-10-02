import { BrandBaseResponse } from '@/generated/graphql';

export default function PostBrands({
  brands,
}: {
  brands: BrandBaseResponse[];
}) {
  return (
    <>
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="rounded-lg px-1 py-0.5 text-[10px] md:text-xs bg-blurple-500 text-gray-200"
        >
          {brand.name}
        </div>
      ))}
    </>
  );
}
