import SwapName from '../swaps/swap-name';

export default function DealDetailName({
  name0,
  name1,
}: {
  name0: string;
  name1?: string;
}) {
  return (
    <div className="text-lg md:text-xl font-semibold">
      {name1 ? <SwapName name0={name0} name1={name1} /> : name0}
    </div>
  );
}
