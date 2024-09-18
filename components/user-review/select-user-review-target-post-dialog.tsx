import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { parseUserReviewFormLink } from '@/lib/user-review/parse-user-review-form-link';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';

export default function SelectUserReviewTargetPostDialog({
  userId,
}: {
  userId: string;
}) {
  const router = useRouter();

  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(parseUserReviewFormLink({ userId }));
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-magenta-500 hover:bg-magenta-600 text-sm font-bold p-2 rounded-lg text-gray-100">
      <DiscordLoginDialogButton
        name="매너 평가"
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
