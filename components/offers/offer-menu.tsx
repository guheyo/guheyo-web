import * as React from 'react';
import { OfferStatus } from '@/lib/offer/offer.types';
import { AuthContext } from '../auth/auth.provider';
import ReportAlertDialog from '../reports/report-alert-dialog';
import PrivateOfferMenu from './private-offer-menu';
import PublicReportMenu from '../reports/public-report-menu';

export default function OfferMenu({
  offerId,
  postId,
  offerStatus,
  userId,
  privateOnly,
  reportCount,
  reportCommentCount,
  archivedAt,
}: {
  offerId: string;
  postId: string;
  offerStatus: OfferStatus;
  userId: string;
  privateOnly?: boolean;
  reportCount: number;
  reportCommentCount: number;
  archivedAt?: Date;
}) {
  const { jwtPayload } = React.useContext(AuthContext);

  if (jwtPayload?.id === userId) {
    const uncommentedReportCount = reportCount - reportCommentCount;
    if (uncommentedReportCount > 0)
      return (
        <ReportAlertDialog
          reportCount={reportCount}
          reportCommentCount={reportCommentCount}
        />
      );
    return (
      <div className="mr-[-24px]">
        <PrivateOfferMenu
          offerId={offerId}
          offerStatus={offerStatus}
          archivedAt={archivedAt}
        />
      </div>
    );
  }

  if (privateOnly) return <div />;

  return (
    <div className="mr-[-24px]">
      <PublicReportMenu type="post" refId={postId} />
    </div>
  );
}
