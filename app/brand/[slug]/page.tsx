'use client';

import BrandHome from '@/components/brand/brand-home';
import { useFindBrandQuery } from '@/generated/graphql';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { data, loading } = useFindBrandQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });
  if (loading) return <div />;
  if (!data?.findBrand) return <div />;

  const brand = data.findBrand;

  return (
    <div className="flex flex-col gap-4">
      <BrandHome brand={brand} />
    </div>
  );
}

export default Page;
