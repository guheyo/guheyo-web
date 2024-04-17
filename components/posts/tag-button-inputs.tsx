'use client';

import { TagOption } from '@/lib/offer/offer.interfaces';

export default function TagButtonInputs({
  tagOptions,
  handleClick,
}: {
  tagOptions: TagOption[];
  handleClick: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-12 gap-2">
      {tagOptions.map((tag, index) => (
        <button
          type="button"
          key={tag.id}
          onClick={() => handleClick(index)}
          className={
            tag.isSelected
              ? `col-span-3 md:col-span-2 text-xs md:text-sm text-dark-700 bg-light-200 hover:bg-light-200 font-bold rounded-lg p-2`
              : `col-span-3 md:col-span-2 text-xs md:text-sm text-light-200 bg-dark-400 hover:bg-dark-200 font-bold rounded-lg p-2`
          }
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}
