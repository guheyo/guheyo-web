import { AuthorResponse } from '@/generated/graphql';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

export default function ReportHeader({
  title,
  author,
  updatedAt,
}: {
  title: string;
  author: AuthorResponse;
  updatedAt: Date;
}) {
  const router = useRouter();
  const device = useDeviceDetect();

  const handleClick = () => {
    router.back();
  };

  return (
    <button type="button" onClick={handleClick}>
      <div className="flex flex-col gap-4">
        <UserProfileRedirectButton
          user={author}
          displayAvatar
          displayUsername
          fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
        />
        <div className="grid grid-cols-1 gap-1 justify-items-start">
          <div className="flex flex-row gap-2">
            <div className="flex-1 text-gray-300 text-base font-semibold">
              {title}
            </div>
            <div className="felx-none text-dark-200 text-sm font-normal">
              최근 수정 : {dayjs(updatedAt).fromNow()}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
