'use client';

import { useState, Dispatch, SetStateAction } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  text: string;
  maxLine: number;
}

function ReadMoreButton({
  text,
  maxLine,
  isSummary,
  setSummary,
}: {
  text: string;
  maxLine: number;
  isSummary: boolean;
  setSummary: Dispatch<SetStateAction<boolean>>;
}) {
  const lines = text.split('\n');
  if (lines.length > maxLine) {
    return (
      <button type="submit" onClick={() => setSummary(!isSummary)}>
        {isSummary ? '... 더보기' : ''}
      </button>
    );
  }
  return null;
}

export default function ReadMore({ text, maxLine }: Props) {
  const [isSummary, setSummary] = useState(true);

  const getSummary = () => {
    if (!isSummary) return text;
    const lines = text.split('\n');
    const summary = lines.splice(0, maxLine).join('\n');
    return summary;
  };

  return (
    <div>
      <div>
        <Markdown remarkPlugins={[remarkGfm]}>
          {getSummary()}
        </Markdown>
      </div>
      <ReadMoreButton
        text={text}
        maxLine={maxLine}
        isSummary={isSummary}
        setSummary={setSummary}
      />
    </div>
  );
}
