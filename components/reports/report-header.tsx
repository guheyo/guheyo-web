import { AuthorResponse } from '@/generated/graphql';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import UserProfilePopper from '../users/user-profile-popper';

export default function ReportHeader({
  name,
  price,
  author,
  updatedAt,
}: {
  name: string;
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
        <UserProfilePopper
          user={author}
          displayAvatar
          displayUsername
          displayDM
          mode="standard"
        />
        <div className="grid grid-cols-1 gap-1 justify-items-start">
          <div className="text-light-200 text-base font-semibold">{name}</div>
          <div className="text-light-200 text-sm font-normal">{price}원</div>
          <div className="text-dark-200 text-sm font-normal">
            최근 수정 : {dayjs(updatedAt).fromNow()}
          </div>
        </div>
      </div>
    </button>
  );
}
