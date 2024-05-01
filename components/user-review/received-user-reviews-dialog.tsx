import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { parseOfferReviewsLink } from '@/lib/offer/parse-offer-reviews-link';
import DiscordLoginDialog from '../auth/discord-login-dialog';

export default function ReceivedUserReviewsDialog({
  offerSlug,
}: {
  offerSlug: string;
}) {
  const router = useRouter();

  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(parseOfferReviewsLink({ slug: offerSlug }));
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-500 hover:bg-dark-200 text-sm font-bold p-2 rounded text-gray-300">
      <DiscordLoginDialog
        name="받은 후기 보기"
        icon={<StickyNote2Icon fontSize="small" />}
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
