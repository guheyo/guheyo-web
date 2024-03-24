import NewReleasesIcon from '@mui/icons-material/NewReleases';

export default function ReportCommentsCount({
  reportCommentCount,
}: {
  reportCommentCount: number;
}) {
  return (
    <div className="flex flex-row gap-0.5 text-yellow-500 items-center">
      <div>
        <NewReleasesIcon fontSize="inherit" />
      </div>
      <div>{reportCommentCount}</div>
    </div>
  );
}
