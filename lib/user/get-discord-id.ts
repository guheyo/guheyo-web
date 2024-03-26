import { SocialAccountWithoutAuthResponse } from '@/generated/graphql';
import { find } from 'lodash';

export const getSocialID = ({
  socialAccounts,
  provider,
}: {
  socialAccounts: SocialAccountWithoutAuthResponse[];
  provider: string;
}) => {
  const account = find(
    socialAccounts,
    (socialAccount) => socialAccount.provider === provider,
  );
  return account?.socialId;
};
