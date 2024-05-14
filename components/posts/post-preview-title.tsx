import { truncateText } from '@/lib/text/truncate-text';
import SwapName from '../swaps/swap-name';

export default function PostPreviewTitle({
  name0,
  name1,
}: {
  name0: string;
  name1?: string;
}) {
  if (!name0 && !name1) return <div />;
  if (name1) {
    return (
      <div className="text-xs md:text-sm font-medium text-gray-300">
        <SwapName name0={name0} name1={name1} />
      </div>
    );
  }
  return (
    <div className="text-xs md:text-sm font-medium text-gray-300">
      {truncateText(name0, 45)}
    </div>
  );
}
