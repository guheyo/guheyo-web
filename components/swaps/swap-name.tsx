import {
  ArrowLeftEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function SwapName({
  name0,
  name1,
}: {
  name0: string;
  name1: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-0">
      <div className="flex flex-row gap-2 items-center">
        <ArrowRightStartOnRectangleIcon width={24} height={24} />
        <div>{name0}</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <ArrowLeftEndOnRectangleIcon width={24} height={24} />
        <div>{name1}</div>
      </div>
    </div>
  );
}
