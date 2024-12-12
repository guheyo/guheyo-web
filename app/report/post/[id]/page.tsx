'use client';

import PostReportForm from '@/components/posts/post-report-form';
import { useFindPostPreviewQuery } from '@/generated/graphql';
import { use } from 'react';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data, loading } = useFindPostPreviewQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findPostPreview) return <div />;
  const post = data.findPostPreview;

  return (
    <PostReportForm
      reportedPostId={post.id}
      title={post.title}
      reportedUserId={post.user.id}
      groupId={post.group.id}
    />
  );
}
