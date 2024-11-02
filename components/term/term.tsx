'use client';

import { useFindTermQuery } from '@/generated/graphql';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Term({ name }: { name: string }) {
  const { loading, data } = useFindTermQuery({
    variables: {
      name,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findTerm) return <div />;

  const { title, content } = data.findTerm;

  return (
    <div title={title}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-invert prose-xs md:prose-sm max-w-none"
      >
        {content}
      </Markdown>
    </div>
  );
}
