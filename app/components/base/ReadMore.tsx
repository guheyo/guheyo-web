'use client'

import {memo, useCallback, useState} from 'react'
import {ReactMarkdown} from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
  text: string
  maxLine: number
}

const ReadMore = ({text, maxLine}: Props) => {
  const [isSummary, setSummary] = useState<boolean>(true)

  const getSummary = useCallback(() => {
    if (!isSummary) return text
    const lines = text.split('\n')
    return lines.splice(0, maxLine).join('\n')
  }, [isSummary, text, maxLine])

  const ReadMoreButton = () => {
    const lines: string[] = text.split('\n')
    if (lines.length > maxLine) {
      return <button onClick={() => setSummary(!isSummary)}>{isSummary ? '... 더보기' : ''}</button>
    } else {
      return <></>
    }
  }

  return (
    <div>
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{getSummary()}</ReactMarkdown>
      </div>
      <ReadMoreButton />
    </div>
  )
}

export default memo(ReadMore)
