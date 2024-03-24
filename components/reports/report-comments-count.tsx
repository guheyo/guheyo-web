import NewReleasesIcon from '@mui/icons-material/NewReleases';

export default function ReportCommentsCount({
  reportCommentCount,
}: {
  reportCommentCount: number;
}) {
  if (!reportCommentCount) return <div />;

  return (
    <div className="flex flex-row gap-0.5 text-yellow-500">
      <div>
        <NewReleasesIcon fontSize="inherit" />
      </div>
      <div>{reportCommentCount}</div>
    </div>
  );
}
