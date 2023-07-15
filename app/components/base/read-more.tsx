'use client';

import { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  text: string,
  maxLine: number,
}

export default function ReadMore({
  text,
  maxLine
}: Props) {
  const [ isSummary, setSummary ] = useState(true);
  
  const getSummary = () => {
    if (!isSummary) return text; 
    const lines = text.split('\n');
    const summary = lines.splice(0, maxLine).join('\n');
    return summary;
  };

  function ReadMoreButton() {
    const lines = text.split('\n');
    if (lines.length > maxLine) {
      return (
        <button
          type='submit'
          onClick={() => setSummary(!isSummary)}>
          {isSummary ? '... 더보기' : ''}
        </button>
      )
    } 
    return null;
  }

  return (
    <div>
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {getSummary()}
        </ReactMarkdown>
      </div>
      <ReadMoreButton />
    </div>
  );
}