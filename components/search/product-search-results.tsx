import DemandFeed from '@/components/demands/demand-feed';
import OfferFeed from '@/components/offers/offer-feed';

export default function ProductSearchResults({
  keyword,
}: {
  keyword?: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-4 w-full">
      <div>
        <div className="text-light-200 text-base md:text-lg font-bold m-2">
          팝니다
        </div>
        <div className="grid gap-1 grid-cols-1 max-h-[470px] md:max-h-[800px] overflow-y-scroll">
          {keyword ? (
            <OfferFeed status="OPEN" keyword={keyword} type="text" />
          ) : (
            <div>검색 결과가 없어요</div>
          )}
        </div>
      </div>
      <div>
        <div className="text-light-200 text-base md:text-lg font-bold m-2">
          삽니다
        </div>
        <div className="grid gap-1 grid-cols-1 max-h-[470px] md:max-h-[800px] overflow-y-scroll">
          {keyword ? (
            <DemandFeed status="OPEN" keyword={keyword} />
          ) : (
            <div>검색 결과가 없어요</div>
          )}
        </div>
      </div>
    </div>
  );
}
