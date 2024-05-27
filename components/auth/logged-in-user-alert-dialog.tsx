import { MyUserResponse } from '@/generated/graphql';
import { hasReportedUserRole } from '@/lib/role/has-reported-user-role';
import ReportsAlertDialog from '../reports/reports-alert-dialog';

export default function LoggedInUserAlertDialog({
  user,
}: {
  user: MyUserResponse;
}) {
  const isReportedUser = hasReportedUserRole({ user });
  if (isReportedUser) return <ReportsAlertDialog user={user} />;

  return <div />;
}
