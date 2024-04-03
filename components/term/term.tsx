'use client';

import { useFindTermQuery } from '@/generated/graphql';
import ReactMarkdown from 'react-markdown';
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

  const term = data.findTerm;

  return (
    <div title={term.title}>
      <ReactMarkdown
        className="prose prose-invert prose-sm md:prose-base max-w-none"
        remarkPlugins={[remarkGfm]}
      >
        {term.content}
      </ReactMarkdown>
    </div>
  );
}
