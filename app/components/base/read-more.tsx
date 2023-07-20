'use client';

import { useState, Dispatch, SetStateAction, memo } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  text: string;
  maxLine: number;
}

interface ReadMoreProps extends Props {
  isSummary: boolean;
  setSummary: Dispatch<SetStateAction<boolean>>;
}

const ReadMoreButton = memo(
  ({ text, maxLine, isSummary, setSummary }: ReadMoreProps) => {
    const lines: string[] = text.split('\n');
    if (lines.length > maxLine) {
      return (
        <button type="submit" onClick={() => setSummary(!isSummary)}>
          {isSummary ? '... 더보기' : ''}
        </button>
      );
    }
    return null;
  },
);

const ReadMore = ({ text, maxLine }: Props) => {
  const [isSummary, setSummary] = useState<boolean>(true);

  const getSummary = () => {
    if (!isSummary) return text;
    const lines = text.split('\n');
    return lines.splice(0, maxLine).join('\n');
  };

  return (
    <div>
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {getSummary()}
        </ReactMarkdown>
      </div>
      <ReadMoreButton
        text={text}
        maxLine={maxLine}
        isSummary={isSummary}
        setSummary={setSummary}
      />
    </div>
  );
};

export default memo(ReadMore);
