import { truncateText } from '@/lib/text/truncate-text';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

export default function SwapName({
  name0,
  name1,
}: {
  name0: string;
  name1: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-1">
      <div className="flex flex-row gap-2 items-center">
        <EastIcon fontSize="small" className="text-dark-200 rounded" />
        <div>{truncateText(name0, 25)}</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <WestIcon fontSize="small" className="text-dark-200  rounded" />
        <div>{truncateText(name1, 25)}</div>
      </div>
    </div>
  );
}
