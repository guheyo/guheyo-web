import moment from "moment";
import { SocialAccount } from "prisma"
import SocialLogo from "./social-logo";

export default function SocialJoinDates({
  socialAccounts
}: {
  socialAccounts?: SocialAccount[]
}) {
  if (!socialAccounts) return null

  const getJoinedDate = (socialAccount: SocialAccount) => `${moment(socialAccount.createdAt).format('MMMM Do YYYY')}`;
  
  return (
    <div className="flex flex-col justify-start">
      {socialAccounts.map((socialAccount) => (
          <div key={socialAccount.id} className="flex flex-row gap-1">
            <SocialLogo provider="discord" color="blue" width={18} height={18} />
            <div>
              {getJoinedDate(socialAccount)}
            </div>
          </div>
        ))}
    </div>
  );
}