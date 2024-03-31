'use client';

import { useFindOfferQuery } from '@/generated/graphql';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import ReportFeed from '../reports/report-feed';
import ReportHeader from '../reports/report-header';

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

  const where: FindReportPreviewsWhereArgs = {
    type: 'offer',
    refId: offer.id,
    reportedUserId: offer.seller.id,
  };
  const orderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'asc',
  };

  return (
    <>
      <ReportHeader
        name={offer.name}
        price={offer.price}
        author={offer.seller}
        updatedAt={offer.updatedAt}
      />
      <ReportFeed where={where} orderBy={orderBy} />
    </>
  );
}
