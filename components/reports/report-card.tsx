import { AuthorResponse, useFindCommentQuery } from '@/generated/graphql';
import ReportPreview from './report-preview';
import ReportCommentCard from './report-comment-card';

export default function ReportCard({
  id,
  title,
  content,
  createdAt,
  reportedUser,
  type,
  refVersionId,
}: {
  id: string;
  title: string;
  content?: string | null;
  createdAt: Date;
  reportedUser: AuthorResponse;
  type: string;
  refVersionId: string;
}) {
  const { data } = useFindCommentQuery({
    variables: {
      type: 'report',
      refId: id,
    },
    fetchPolicy: 'cache-and-network',
  });

  return (
    <div key={id} className="flex flex-col gap-2">
      <ReportPreview
        title={title}
        content={content}
        createdAt={createdAt}
        type={type}
        refVersionId={refVersionId}
      />
      <ReportCommentCard
        reportId={id}
        reportedUser={reportedUser}
        comment={data?.findComment}
      />
    </div>
  );
}
