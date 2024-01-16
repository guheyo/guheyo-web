import { SocialAccountResponse, SocialAccountWithoutAuthResponse } from '@/generated/graphql';
import SocialJoinDate from './social-join-date';

export default function SocialJoinDates({
  socialAccounts,
  logoSize,
}: {
  socialAccounts?: SocialAccountResponse[] | SocialAccountWithoutAuthResponse[];
  logoSize: number,
}) {
  if (!socialAccounts) return null;

  return (
    <div className="flex flex-col justify-start">
      {socialAccounts.map((socialAccount) => (
        <SocialJoinDate socialAccount={socialAccount} logoSize={logoSize}/>
      ))}
    </div>
  );
}
