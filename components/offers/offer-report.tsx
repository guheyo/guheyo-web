'use client';

import { useFindOfferQuery } from '@/generated/graphql';
import ReportFeed from '../reports/report-feed';
import ReportHeader from '../reports/report-header';
import ReportHomeLayout from '../reports/report-home.layout';

export default function OfferReport({ slug }: { slug: string }) {
  const { loading, data } = useFindOfferQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'network-only',
  });

  if (loading) return <div />;
  if (!data?.findOffer) return <div />;
  const offer = data.findOffer;

  return (
    <ReportHomeLayout>
      <ReportHeader
        name={offer.name}
        price={offer.price}
        author={offer.seller}
        updatedAt={offer.updatedAt}
      />
      <ReportFeed
        type="offer"
        refId={offer.id}
        reportedUserId={offer.seller.id}
      />
    </ReportHomeLayout>
  );
}
