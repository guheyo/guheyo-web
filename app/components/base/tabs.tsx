'use client';

import React, { useCallback, useState } from 'react';

interface Props {
  label: string;
  value: string;
}

export default function Tabs({ tabs }: { tabs: Props[] }) {
  const [selected, setSelected] = useState(0);
  const getButtonCSS = useCallback((clicked: boolean): string => {
    return clicked
      ? `bg-black hover:bg-gray-700 text-white`
      : `bg-neutral-white hover:bg-gray-200 text-black`;
  }, []);

  const handleOnClick = useCallback((i: number): void => {
    setSelected(i);
  }, []);

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
