'use client';

import OfferVersionDetail from '@/components/offers/offer-version-detail';
import ReportCard from '@/components/reports/report-card';
import { useFindReportQuery } from '@/generated/graphql';
import { OFFER } from '@/lib/offer/offer.constants';
import { POST } from '@/lib/post/post.constants';

export default function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { data, loading } = useFindReportQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findReport) return <div />;
  const report = data.findReport;

  if (report.type === POST) {
    if (report.version.values.post.type === OFFER) {
      return (
        <div className="flex flex-col gap-12">
          <OfferVersionDetail
            versionCreatedAt={report.version.createdAt}
            images={report.version.images}
            user={report.reportedUser}
            offer={report.version.values}
            post={report.version.values.post}
          />
          <ReportCard
            reportId={report.id}
            reason={report.reason}
            description={report.description}
            createdAt={report.createdAt}
            reportedUser={report.reportedUser}
            type={report.type}
          />
        </div>
      );
    }
  }
  return <div />;
}
