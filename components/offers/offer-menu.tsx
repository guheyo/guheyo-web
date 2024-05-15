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
      <PrivateOfferMenu
        offerId={offerId}
        offerStatus={offerStatus}
        archivedAt={archivedAt}
      />
    );
  }

  if (privateOnly) return <div />;

  return <PublicReportMenu type="post" refId={postId} />;
}
