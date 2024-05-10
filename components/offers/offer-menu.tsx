import * as React from 'react';
import { OfferStatus } from '@/lib/offer/offer.types';
import { AuthContext } from '../auth/auth.provider';
import PrivateOfferMenu from './private-offer-menu';
import PublicReportMenu from '../reports/public-report-menu';

export default function OfferMenu({
  offerId,
  postId,
  offerStatus,
  userId,
  privateOnly,
  archivedAt,
}: {
  offerId: string;
  postId: string;
  offerStatus: OfferStatus;
  userId: string;
  privateOnly?: boolean;
  archivedAt?: Date;
}) {
  const { jwtPayload } = React.useContext(AuthContext);

  if (jwtPayload?.id === userId) {
    return (
      <div className="mr-[-18px]">
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
    <div className="mr-[-18px]">
      <PublicReportMenu type="post" refId={postId} />
    </div>
  );
}
