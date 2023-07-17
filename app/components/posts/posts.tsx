'use client'

import React, {memo, ReactNode, useCallback, useRef} from 'react'
import {useAppSelector} from '@/redux/hooks'
import {useInfiniteQuery} from '@tanstack/react-query'
import {getPosts} from '@/app/lib/api/posts'
import {useInfiniteScroll} from '@/app/hooks/useInfiniteScroll'
import MockCard from './mock-card'
import {RootState} from '@/redux/store'
import PostPreviewCards from '@/app/components/posts/post-preview-cards'
import {Post} from 'prisma'

interface Pages {
  lastPage: Post[] | undefined
  allPages: Post[] | undefined
}
interface PostProps {
  type: string
  children: ReactNode
  includeRef: boolean
}

const Posts = () => {
  const categoryId = useAppSelector((state: RootState) => state.categoriesSlice.categoryId)
  const type = useAppSelector((state: RootState) => state.postsSlice.type)
  const cols = useAppSelector((state: RootState) => state.postsSlice.cols)

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, status} = useInfiniteQuery(['posts', categoryId, type], {
    queryFn: async ({pageParam = ''}) => {
      return getPosts(categoryId ?? '', type, pageParam)
    },
    getNextPageParam: (lastPage, allPages): Pages => lastPage.cursor,
  })

  const ref = useRef<HTMLDivElement>()
  const fetchNext = useCallback((): void => {
    if (!hasNextPage) return
    fetchNextPage()
  }, [hasNextPage, fetchNextPage])

  useInfiniteScroll(ref, fetchNext)

  const MockCards = () => {
    return (
      <>
        {[...Array(18)].map((v, i) => (
          <MockCard key={i} type={type} />
        ))}
      </>
    )
  }

  const GridWrapper = ({type, children, includeRef}: PostProps) => {
    if (type === 'buy') {
      return (
        <div className='flex justify-center'>
          <div className={`grid gap-2 max-w-lg md:gap-2 lg:gap-2 grid-cols-1 items-start`}>{children}</div>
          {includeRef && <div ref={ref} />}
        </div>
      )
    } else {
      return (
        <div
          className={`grid gap-4 md:gap-8 lg:gap-12 ${
            cols === 1 ? 'grid-cols-1' : 'grid-cols-2'
          } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start`}
        >
          {children}
          {includeRef && <div ref={ref} />}
        </div>
      )
    }
  }

  if (status === 'loading')
    return (
      <GridWrapper type={type} includeRef={true}>
        <MockCards />
      </GridWrapper>
    )

  if (status === 'error') return <p>Error ...</p>

  return (
    <GridWrapper type={type} includeRef={true}>
      <PostPreviewCards data={data} type={type} cols={cols} />
    </GridWrapper>
  )
}

export default memo(Posts)
