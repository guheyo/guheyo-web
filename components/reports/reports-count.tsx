import WarningIcon from '@mui/icons-material/Warning';

export default function ReportsCount({ reportCount }: { reportCount: number }) {
  return (
    <div className="flex flex-row gap-0.5 text-red-500 items-center">
      <div>
        <WarningIcon fontSize="inherit" />
      </div>
      <div>{reportCount}</div>
    </div>
  );
}
