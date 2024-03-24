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
}: {
  index: number;
  id: string;
  title: string;
  content?: string | null;
  createdAt: Date;
  reportedUserId: string;
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
