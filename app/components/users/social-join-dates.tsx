import { memo } from 'react';
import moment from 'moment';
import { SocialAccount } from 'prisma';
import SocialLogo from './social-logo';

interface Props {
  socialAccounts?: SocialAccount[];
}

const SocialJoinDates = ({ socialAccounts }: Props) => {
  if (!socialAccounts) return null;

  const getJoinedDate = (socialAccount: SocialAccount): string =>
    `${moment(socialAccount.createdAt).format('MMMM Do YYYY')}`;

  return (
    <div className="flex flex-col justify-start">
      {socialAccounts.map((socialAccount) => (
        <div key={socialAccount.id} className="flex flex-row gap-1">
          <SocialLogo provider="discord" color="blue" width={18} height={18} />
          <div>{getJoinedDate(socialAccount)}</div>
        </div>
      ))}
    </div>
  );
};

export default memo(SocialJoinDates);
