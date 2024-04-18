import { AuthorResponse, useFindReportCommentQuery } from '@/generated/graphql';
import { ReportType } from '@/lib/report/report.types';
import ReportPreview from './report-preview';
import ReportCommentCard from './report-comment-card';

export default function ReportCard({
  reportId,
  reason,
  description,
  createdAt,
  reportedUser,
  type,
}: {
  reportId: string;
  reason: string;
  description?: string | null;
  createdAt: Date;
  reportedUser: AuthorResponse;
  type: ReportType;
}) {
  const { data } = useFindReportCommentQuery({
    variables: {
      reportId,
    },
    fetchPolicy: 'cache-and-network',
  });

  return (
    <div key={reportId} className="flex flex-col gap-2">
      <ReportPreview
        reason={reason}
        description={description}
        createdAt={createdAt}
        type={type}
      />
      <ReportCommentCard
        reportId={reportId}
        reportedUser={reportedUser}
        comment={data?.findReportComment}
      />
    </div>
  );
}
