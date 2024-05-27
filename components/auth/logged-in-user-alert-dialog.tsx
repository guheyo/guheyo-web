import { MyUserResponse } from '@/generated/graphql';
import { hasReportedUserRole } from '@/lib/role/has-reported-user-role';
import { hasSocialAccount } from '@/lib/social/has-social-account';
import ReportsAlertDialog from '../reports/reports-alert-dialog';
import KakaoAuthAlertDialog from '../socials/kakao-auth-alert-dialog';

export default function LoggedInUserAlertDialog({
  user,
}: {
  user: MyUserResponse;
}) {
  const isKakaoUser = hasSocialAccount({ user, provider: 'kakao' });
  if (!isKakaoUser) return <KakaoAuthAlertDialog user={user} />;

  const isReportedUser = hasReportedUserRole({ user });
  if (isReportedUser) return <ReportsAlertDialog user={user} />;

  return <div />;
}
