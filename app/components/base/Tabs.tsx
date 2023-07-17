'use client'

import {memo, useState, useCallback} from 'react'

interface Props {
  tabs: {
    label: string
    value: string
  }[]
}
const Tabs = ({tabs}: Props) => {
  const [selected, setSelected] = useState<number>(0)

  const handleOnClick = useCallback((i: number): void => {
    setSelected(i)
  }, [])

  const getButtonCSS = useCallback((clicked: boolean): string => {
    return clicked ? `bg-black hover:bg-gray-700 text-white` : `bg-neutral-white hover:bg-gray-200 text-black`
  }, [])

  return (
    <div className='flex flex-row gap-2 md:gap-6 lg:gap-8 items-center'>
      <div className='flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8'>
        {tabs.map((tab, i) => (
          <a key={i} href={`#${tab.value}`} className='flex-none'>
            <button
              className={`max-w-sm rounded p-2 overflow-hidden shadow-sm ${getButtonCSS(selected === i)}`}
              onClick={() => handleOnClick(i)}
            >
              <div className='font-bold text-xs md:text-base'>{tab.label}</div>
            </button>
          </a>
        ))}
      </div>
    </div>
  )
}

export default memo(Tabs)
