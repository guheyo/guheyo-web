import {
  SocialAccountResponse,
  SocialAccountWithoutAuthResponse,
} from '@/generated/graphql';
import SocialLogo from './social-logo';

export default function SocialLogos({
  socialAccounts,
  logoSize,
}: {
  socialAccounts?: SocialAccountResponse[] | SocialAccountWithoutAuthResponse[];
  logoSize: number;
}) {
  if (!socialAccounts) return null;

  return (
    <div className="flex flex-row gap-2 justify-start">
      {socialAccounts.map((socialAccount) => (
        <SocialLogo
          key={socialAccount.id}
          provider={socialAccount.provider}
          width={logoSize}
          height={logoSize}
        />
      ))}
    </div>
  );
}
