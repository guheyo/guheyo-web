import DemandFeed from '@/components/demands/demand-feed';
import OfferFeed from '@/components/offers/offer-feed';

export default function ProductSearchResults({
  groupId,
  categoryId,
  keyword,
}: {
  groupId?: string;
  categoryId?: string;
  keyword?: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-4 w-full">
      <div>
        <div className="text-light-200 text-sm md:text-base font-bold m-2">
          팝니다
        </div>
        <div className="grid gap-1 grid-cols-1 max-h-[470px] md:max-h-[800px] overflow-y-scroll">
          {keyword ? (
            <OfferFeed
              groupId={groupId}
              categoryId={categoryId}
              status="OPEN"
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
              groupId={groupId}
              categoryId={categoryId}
              status="OPEN"
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
