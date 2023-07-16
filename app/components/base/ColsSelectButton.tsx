'use client'

import {ListBulletIcon, Bars3Icon} from '@heroicons/react/24/outline'
import {memo, useCallback} from 'react'
import {setCols} from '@/redux/features/postsSlice'
import {useAppDispatch, useAppSelector} from '@/redux/hooks'
import {RootState} from '@/redux/store'

const ColsSelectButton = () => {
  const cols = useAppSelector((state: RootState) => state.postsSlice.cols)
  const dispatch = useAppDispatch()

  const handelColBtnOnClick = useCallback(
    (cols: number) => {
      dispatch(setCols(cols))
    },
    [dispatch],
  )

  if (cols === 1) {
    return (
      <button className='flex items-center' onClick={() => handelColBtnOnClick(2)}>
        <ListBulletIcon width={28} height={28} />
      </button>
    )
  } else {
    return (
      <button className='flex items-center' onClick={() => handelColBtnOnClick(1)}>
        <Bars3Icon width={28} height={28} />
      </button>
    )
  }
}

export default memo(ColsSelectButton)
