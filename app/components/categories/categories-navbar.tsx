'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  fetchCategories,
  setCategoryId,
} from '@/redux/features/categoriesSlice';
import { useDeviceDetect } from '@/app/hooks/useDeviceDetect';
import ColsSelectButton from '../base/cols-select-button';
import TypeSelector from '../posts/type-selector';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `bg-neutral-white hover:bg-gray-200 text-black`;
  }
  return `bg-black hover:bg-gray-700 text-white`;
};

export default function CategoriesNavbar({ guildName }: { guildName: string }) {
  const categories = useAppSelector(
    (state) => state.categoriesSlice.categories,
  );
  const categoriId = useAppSelector(
    (state) => state.categoriesSlice.categoryId,
  );
  const device = useDeviceDetect();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories(guildName));
  }, [guildName]);

  const handleOnClick = (id: string) => {
    dispatch(setCategoryId(id));
  };

  return (
    <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center">
      <div className="flex-none text-xs md:text-base">
        <TypeSelector />
      </div>
      <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
        {categories.map((category) => (
          <div key={category.id} className="flex-none">
            <button
              type="submit"
              className={`max-w-sm rounded p-2 overflow-hidden shadow-sm ${getButtonCSS(
                categoriId === category.id,
              )}`}
              value={category.id}
              onClick={() => handleOnClick(category.id)}
            >
              <div className="font-bold text-xs md:text-base">
                {category.name}
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className="flex-none">
        {device === 'mobile' && (
          <div className="flex-none">
            <ColsSelectButton />
          </div>
        )}
      </div>
    </div>
  );
}
