import { ReportResponse } from '@/generated/graphql';
import { countComments } from '@/lib/comment/count-comments';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

export default function ReportCommentsCount({
  reports,
}: {
  reports: ReportResponse[];
}) {
  if (reports.length === 0) return <div />;

  return (
    <div className="flex flex-row gap-0.5 text-yellow-500">
      <div>
        <NewReleasesIcon fontSize="inherit" />
      </div>
      <div>{`${countComments(reports)}`}</div>
    </div>
  );
}
