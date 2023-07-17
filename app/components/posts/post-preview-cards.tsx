'use client'

import {Fragment, memo} from 'react'
import {Post} from 'prisma'
import PostPreviewCard from '@/app/components/posts/post-preview-card'

interface Props {
  data: any
  type: string
  cols: number
}

const PostPreviewCards = ({data, type, cols}: Props) => {
  if (!data) return <></>
  return (
    <>
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.posts?.map((post: Post, i) => (
            <div className='col-span-1' key={i}>
              <PostPreviewCard type={type} post={post} cols={cols} />
            </div>
          ))}
        </Fragment>
      ))}
    </>
  )
}

export default memo(PostPreviewCards)
