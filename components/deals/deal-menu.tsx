import * as React from 'react';
import { Deal } from '@/lib/deal/deal.types';
import { AuthContext } from '../auth/auth.provider';
import PrivateDealMenu from './private-deal-menu';
import PublicDealMenu from './public-deal-menu';
import ReportAlertButton from '../reports/report-alert-button';

export default function DealMenu({
  dealType,
  dealId,
  authorId,
  privateOnly,
  hasUncommentedReports,
}: {
  dealType: Deal;
  dealId: string;
  authorId: string;
  privateOnly?: boolean;
  hasUncommentedReports: boolean;
}) {
  const { user } = React.useContext(AuthContext);

  if (user?.id === authorId) {
    if (hasUncommentedReports) return <ReportAlertButton />;
    return (
      <PrivateDealMenu
        dealType={dealType}
        dealId={dealId}
        authorId={authorId}
      />
    );
  }

  if (privateOnly) return <div />;

  return <PublicDealMenu dealType={dealType} dealId={dealId} />;
}
