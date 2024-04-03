import DemandFeed from '@/components/demands/demand-feed';
import { useSearchParams } from 'next/navigation';
import { parseDealStatus } from '@/lib/deal/parse-deal-status';
import OfferFeed from '../offers/offer-feed';

export default function ProductSearchResults({
  keyword,
}: {
  keyword?: string;
}) {
  const searchParams = useSearchParams();
  const status = parseDealStatus({
    status: searchParams.get('status'),
  });
  const distinct = searchParams.get('distinct') !== 'false';

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-4 w-full">
      <div>
        <div className="text-light-200 text-sm md:text-base font-bold m-2">
          팝니다
        </div>
        <div className="grid gap-1 grid-cols-1 max-h-[470px] md:max-h-[800px] overflow-y-scroll">
          {keyword ? (
            <OfferFeed
              orderBy={{
                price: 'asc',
                bumpedAt: 'desc',
              }}
              keyword={keyword}
              type="text"
              status={status}
              distinct={distinct}
            />
          ) : (
            <div className="text-sm md:text-base">검색 결과가 없어요</div>
          )}
        </div>
      </div>
      <div>
        <div className="text-light-200 text-sm md:text-base font-bold m-2">
          삽니다
        </div>
        <div className="grid gap-1 grid-cols-1 max-h-[470px] md:max-h-[800px] overflow-y-scroll">
          {keyword ? (
            <DemandFeed
              orderBy={{
                price: 'desc',
                bumpedAt: 'desc',
              }}
              keyword={keyword}
              type="text"
              status={status}
              distinct={distinct}
            />
          ) : (
            <div className="text-sm md:text-base">검색 결과가 없어요</div>
          )}
        </div>
      </div>
    </div>
  );
}
