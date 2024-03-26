import { Deal } from '@/lib/deal/deal.types';
import { parseDealDetailLink } from '@/lib/link/parse-user-page.link';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function RecentVersionLink({
  versionCreatedAt,
  username,
  dealType,
  slug,
}: {
  versionCreatedAt: Date;
  username: string;
  dealType: Deal;
  slug: string;
}) {
  return (
    <div className="flex flex-col gap-1 text-xs md:text-sm bg-dark-500 w-fit p-3 rounded">
      <div className="">
        {`[주의] 문서의 이전 버전(${dayjs(versionCreatedAt).format(
          'YYYY-MM-DD HH:mm:ss',
        )} 수정)을 보고 있어요`}
      </div>
      <Link
        href={parseDealDetailLink({
          username,
          deal: dealType,
          slug,
        })}
        className="text-star-500 font-semibold"
      >
        최신 버전으로 이동
      </Link>
    </div>
  );
}