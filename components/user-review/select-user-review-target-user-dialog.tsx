import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { parseUserReviewFormLink } from '@/lib/user-review/parse-user-review-form-link';
import CreateIcon from '@mui/icons-material/Create';
import DiscordLoginDialog from '../auth/discord-login-dialog';

export default function SelectUserReviewTargetUserDialog({
  offerId,
}: {
  offerId: string;
}) {
  const router = useRouter();

  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(parseUserReviewFormLink({ offerId }));
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-500 hover:bg-dark-200 text-sm font-bold p-2 rounded text-light-200">
      <DiscordLoginDialog
        name="후기 보내기"
        icon={<CreateIcon fontSize="small" />}
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
