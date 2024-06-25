import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import CreateIcon from '@mui/icons-material/Create';
import { UserReviewTargetType } from '@/lib/user-review/user-review.constants';
import { parseUserReviewFormLink } from '@/lib/user-review/parse-user-review-form-link';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';

export default function SelectUserReviewTargetUserDialog({
  targetType,
  targetId,
}: {
  targetType: UserReviewTargetType;
  targetId: string;
}) {
  const router = useRouter();

  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(parseUserReviewFormLink({ targetType, targetId }));
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-500 hover:bg-dark-200 text-sm font-bold p-2 rounded text-gray-300">
      <DiscordLoginDialogButton
        name="후기 보내기"
        icon={<CreateIcon fontSize="small" />}
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
