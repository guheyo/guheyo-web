import { MyUserResponse } from '@/generated/graphql';

export const hasSocialAccount = ({
  user,
  provider,
}: {
  user: MyUserResponse;
  provider: string;
}) =>
  user.socialAccounts.some(
    (socialAccount) => socialAccount.provider === provider,
  );
