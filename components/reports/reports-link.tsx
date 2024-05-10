import WarningIcon from '@mui/icons-material/Warning';
import { useRouter } from 'next/navigation';

export default function ReportsLink({ reportCount }: { reportCount: number }) {
  const router = useRouter();
  if (!reportCount) return <div />;

  const handleClick = () => {
    router.push('#report');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex flex-col gap-1 text-xs md:text-sm w-full"
    >
      <div className="  flex flex-row gap-2 items-center text-red-400">
        <WarningIcon fontSize="medium" />
        {`해당 게시글에 ${reportCount}건의 신고 기록이 있어요`}
      </div>
    </button>
  );
}
