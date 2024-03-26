import * as React from 'react';
import { Deal, DealStatus } from '@/lib/deal/deal.types';
import { AuthContext } from '../auth/auth.provider';
import PrivateDealMenu from './private-deal-menu';
import PublicDealMenu from './public-deal-menu';
import ReportAlertDialog from '../reports/report-alert-dialog';

export default function DealMenu({
  dealType,
  dealId,
  authorId,
  privateOnly,
  reportCount,
  reportCommentCount,
  status,
  isHidden,
}: {
  dealType: Deal;
  dealId: string;
  authorId: string;
  privateOnly?: boolean;
  reportCount: number;
  reportCommentCount: number;
  status: DealStatus;
  isHidden: boolean;
}) {
  const { user } = React.useContext(AuthContext);

  if (user?.id === authorId) {
    const uncommentedReportCount = reportCount - reportCommentCount;
    if (uncommentedReportCount > 0)
      return (
        <ReportAlertDialog
          reportCount={reportCount}
          uncommentedReportCount={uncommentedReportCount}
        />
      );
    return (
      <div className="mr-[-24px]">
        <PrivateDealMenu
          dealType={dealType}
          dealId={dealId}
          authorId={authorId}
          status={status}
          isHidden={isHidden}
        />
      </div>
    );
  }

  if (privateOnly) return <div />;

  return <PublicDealMenu dealType={dealType} dealId={dealId} />;
}
