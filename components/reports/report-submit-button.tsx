import { useFindLastReportQuery } from '@/generated/graphql';
import { MouseEventHandler } from 'react';
import { parseReportButtonName } from '@/lib/report/parse-report-button-name';
import { validateCooldown } from '@/lib/date/validate-cooldown';
import DiscordLoginDialog from '../auth/discord-login-dialog';

export default function ReportSubmitButton() {
  const { data, loading, error } = useFindLastReportQuery({
    fetchPolicy: 'cache-and-network',
  });

  const handleAuthorization: MouseEventHandler = (e) => {
    if (
      data?.findLastReport &&
      !validateCooldown(data.findLastReport.createdAt)
    ) {
      e.preventDefault();
    }
  };

  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  let name;
  if (loading || !data || error) {
    name = '신고하기';
  } else {
    const report = data.findLastReport;
    name = parseReportButtonName(report.createdAt);
  }
  return (
    <DiscordLoginDialog
      name={name}
      onAuthorization={handleAuthorization}
      onUnAuthorization={handleOnAuthorization}
    />
  );
}
