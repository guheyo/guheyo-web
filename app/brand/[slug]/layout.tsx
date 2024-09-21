'use client';

import { ReactNode } from 'react';
import BrandHome from '@/components/brand/brand-home';
import { useFindBrandQuery } from '@/generated/graphql';
import BrandHomeNavbar from '@/components/brand/brand-home-navbar';

interface Props {
  children: ReactNode;
  params: {
    slug: string;
  };
}

function Layout({ children, params }: Props) {
  const { data, loading } = useFindBrandQuery({
    variables: {
      slug: decodeURI(params.slug!),
    },
    fetchPolicy: 'cache-first',
  });

  const brand = data?.findBrand;

  if (loading) return <div />;
  if (!brand) return <div />;

  return (
    <div className="pt-6 pb-4 md:pb-6 px-2 lg:px-0">
      <div className="px-2 pb-6">
        <BrandHome brand={brand} />
      </div>
      <BrandHomeNavbar slug={brand.slug!} />
      {children}
    </div>
  );
}

export default Layout;
