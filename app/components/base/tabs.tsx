'use client';

import React, { useState } from 'react';
import _ from 'lodash'

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `bg-neutral-white hover:bg-gray-200 text-black`
  } else {
    return `bg-black hover:bg-gray-700 text-white`
  }
};

type Tab = {
  label: string,
  value: string
}

export default function Tabs({
  tabs
}: {
  tabs: Tab[]
}) {
  const [selected, setSelected] = useState(0);

  const handleOnClick = (i: number) => {
    setSelected(i);
  };

  return (
    <div className='flex flex-row gap-2 md:gap-6 lg:gap-8 items-center'>
      <div className='flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8'>
        {tabs.map((tab, i) => (
          <a key={i} href={`#${tab.value}`} className='flex-none'>
            <button
              className={`max-w-sm rounded p-2 overflow-hidden shadow-sm ${getButtonCSS(selected === i)}`}
              onClick={() => handleOnClick(i)}>
              <div className="font-bold text-xs md:text-base">{tab.label}</div>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}