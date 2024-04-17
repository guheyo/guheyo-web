import { AuthorResponse } from '@/generated/graphql';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

export default function ReportHeader({
  title,
  price,
  author,
  updatedAt,
}: {
  title: string;
  price: number;
  author: AuthorResponse;
  updatedAt: Date;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button type="button" onClick={handleClick}>
      <div className="flex flex-col gap-4 px-4 py-4 bg-dark-400 rounded w-full">
        <UserProfileRedirectButton
          user={author}
          displayAvatar
          displayUsername
          mode="standard"
        />
        <div className="grid grid-cols-1 gap-1 justify-items-start">
          <div className="text-light-200 text-base font-semibold">{title}</div>
          <div className="text-light-200 text-sm font-normal">{price}원</div>
          <div className="text-dark-200 text-sm font-normal">
            최근 수정 : {dayjs(updatedAt).fromNow()}
          </div>
        </div>
      </div>
    </button>
  );
}
