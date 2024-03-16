'use client';

import { useFindOfferQuery } from '@/generated/graphql';
import ReportFeed from '../reports/report-feed';
import ReportHeader from '../reports/report-header';

export default function OfferReport({ slug }: { slug: string }) {
  const { loading, data } = useFindOfferQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });

  if (loading) return <div />;
  if (!data?.findOffer) return <div />;
  const offer = data.findOffer;

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-8 w-full md:w-3/4">
        <ReportHeader
          name={offer.name}
          price={offer.price}
          author={offer.seller}
          updatedAt={offer.updatedAt}
        />
        <ReportFeed type="offer" offerId={offer.id} />
      </div>
    </div>
  );
}
