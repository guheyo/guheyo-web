import { BusinessFunction } from '@/lib/offer/offer.types';
import { parseBusinessFunctionLabel } from '@/lib/offer/parse-business-function-label';

export default function BusinessFunctionLabel({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  return (
    <div className="text-gray-400 text-[10px] md:text-xs font-semibold">
      {parseBusinessFunctionLabel({ businessFunction })}
    </div>
  );
}
