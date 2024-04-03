import { useFindCommentQuery } from '@/generated/graphql';
import ReportPreview from './report-preview';
import ReportCommentCard from './report-comment-card';

export default function ReportCard({
  index,
  id,
  title,
  content,
  createdAt,
  reportedUserId,
  type,
  refVersionId,
}: {
  index: number;
  id: string;
  title: string;
  content?: string | null;
  createdAt: Date;
  reportedUserId?: string | null;
  type: string;
  refVersionId: string;
}) {
  const { data } = useFindCommentQuery({
    variables: {
      type: 'report',
      refId: id,
    },
    fetchPolicy: 'network-only',
  });

  return (
    <div key={id} className="flex flex-col gap-2">
      <ReportPreview
        index={index}
        title={title}
        content={content}
        createdAt={createdAt}
        type={type}
        refVersionId={refVersionId}
      />
      <ReportCommentCard
        index={index}
        reportId={id}
        reportedUserId={reportedUserId}
        comment={data?.findComment}
      />
    </div>
  );
}
