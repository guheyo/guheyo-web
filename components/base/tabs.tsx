'use client';

import React, { useState } from 'react';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `text-gray-300`;
  }
  return `bg-gray-500 hover:bg-dark-200 text-gray-100`;
};

type Tab = {
  label: string;
  value: string;
};

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [selected, setSelected] = useState(0);

  const handleOnClick = (i: number) => {
    setSelected(i);
  };

  return (
    <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center">
      <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
        {tabs.map((tab, i) => (
          <a key={tab.value} href={`#${tab.value}`} className="flex-none">
            <button
              type="submit"
              className={`max-w-sm rounded p-2 overflow-hidden shadow-sm ${getButtonCSS(
                selected === i,
              )}`}
              onClick={() => handleOnClick(i)}
            >
              <div className="font-bold text-xs md:text-base">{tab.label}</div>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
