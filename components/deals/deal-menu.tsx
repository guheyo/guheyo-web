import * as React from 'react';
import { Deal, DealStatus } from '@/lib/deal/deal.types';
import { AuthContext } from '../auth/auth.provider';
import PrivateDealMenu from './private-deal-menu';
import PublicDealMenu from './public-deal-menu';
import ReportAlertDialog from '../reports/report-alert-dialog';

export default function DealMenu({
  dealId,
  dealType,
  dealStatus,
  authorId,
  privateOnly,
  reportCount,
  reportCommentCount,
  isHidden,
}: {
  dealId: string;
  dealType: Deal;
  dealStatus: DealStatus;
  authorId: string;
  privateOnly?: boolean;
  reportCount: number;
  reportCommentCount: number;
  isHidden: boolean;
}) {
  const { jwtPayload } = React.useContext(AuthContext);

  if (jwtPayload?.id === authorId) {
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
          dealId={dealId}
          dealType={dealType}
          dealStatus={dealStatus}
          authorId={authorId}
          isHidden={isHidden}
        />
      </div>
    );
  }

  if (privateOnly) return <div />;

  return <PublicDealMenu dealType={dealType} dealId={dealId} />;
}
