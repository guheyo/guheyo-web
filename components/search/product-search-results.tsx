import DemandFeed from '@/components/demands/demand-feed';
import OfferFeed from '@/components/offers/offer-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { FindDealsWhereArgs } from '@/interfaces/deal.interfaces';

export default function ProductSearchResults({
  groupId,
  categoryId,
  keyword,
}: {
  groupId?: string;
  categoryId?: string;
  keyword?: string;
}) {
  const status = useDealStatus();
  const where: FindDealsWhereArgs = {
    groupId,
    productCategoryId: categoryId,
    status: status || undefined,
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-4 w-full">
      <div>
        <div className="text-light-200 text-sm md:text-base font-bold m-2">
          팝니다
        </div>
        <div className="grid gap-1 grid-cols-1 max-h-[470px] md:max-h-[800px] overflow-y-scroll">
          {keyword ? (
            <OfferFeed
              where={where}
              orderBy={{
                price: 'asc',
                createdAt: 'desc',
              }}
              keyword={keyword}
              type="text"
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
              where={where}
              orderBy={{
                price: 'desc',
                createdAt: 'desc',
              }}
              keyword={keyword}
            />
          ) : (
            <div className="text-sm md:text-base">검색 결과가 없어요</div>
          )}
        </div>
      </div>
    </div>
  );
}
