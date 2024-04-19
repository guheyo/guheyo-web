'use client';

import { useFindOfferQuery } from '@/generated/graphql';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import { POST } from '@/lib/post/post.constants';
import ReportFeed from '../reports/report-feed';
import ReportHeader from '../reports/report-header';

export default function OfferReport({ slug }: { slug: string }) {
  const { loading, data } = useFindOfferQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findOffer) return <div />;
  const offer = data.findOffer;

  const where: FindReportPreviewsWhereArgs = {
    type: POST,
    refId: offer.post.id,
    reportedUserId: offer.post.user.id,
  };
  const orderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'asc',
  };

  return (
    <>
      <ReportHeader
        title={offer.post.title}
        price={offer.price}
        author={offer.post.user}
        updatedAt={offer.updatedAt}
      />
      <ReportFeed where={where} orderBy={orderBy} />
    </>
  );
}
