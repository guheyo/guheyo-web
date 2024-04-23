import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { parseUserReviewFormLink } from '@/lib/user-review/parse-user-review-link';
import DiscordLoginDialog from '../auth/discord-login-dialog';

export default function OtherUserReviewDialog({
  username,
}: {
  username: string;
}) {
  const router = useRouter();

  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(parseUserReviewFormLink({ username }));
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-star-500 hover:bg-star-400 text-sm font-bold p-2 rounded text-light-200">
      <DiscordLoginDialog
        name="매너 평가"
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
