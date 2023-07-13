'use client';

import React, {memo, useEffect,useCallback} from 'react';
import _ from 'lodash'
import TypeSelector from '../posts/TypeSelector';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchCategories, setCategoryId } from '@/redux/features/categoriesSlice';
import ColsSelectButton from '../base/cols-select-button';
import { useDeviceDetect } from '@/app/hooks/useDeviceDetect';
import {RootState} from '@/redux/store'

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `bg-neutral-white hover:bg-gray-200 text-black`
  } else {
    return `bg-black hover:bg-gray-700 text-white`
  }
};

const CategoriesNavbar = ({
  guildName
}: {
  guildName: string
}) =>{
  const categories = useAppSelector((state:RootState) => state.categoriesSlice.categories);
  const categoryID = useAppSelector((state:RootState) => state.categoriesSlice.categoryId);
  const device:string = useDeviceDetect();
  const dispatch = useAppDispatch();

  useEffect(() : void => {
    dispatch(fetchCategories(guildName));
  }, []);

  const handleOnClick = useCallback((id: string):void => {
      dispatch(setCategoryId(id));
    },
    [],
  );


  return (
    <div className='flex flex-row gap-2 md:gap-6 lg:gap-8 items-center'>
      <div className='flex-none text-xs md:text-base'>
        <TypeSelector />
      </div>
      <div className='flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8'>
        {categories.map((category, index) => (
          <div key={index} className='flex-none'>
            <button
              className={`max-w-sm rounded p-2 overflow-hidden shadow-sm ${getButtonCSS(categoryID === category.id)}`}
              value={category.id}
              onClick={() => handleOnClick(category.id)}>
              <div className="font-bold text-xs md:text-base">{category.name}</div>
            </button>
          </div>
        ))}
      </div>
      <div className='flex-none'>
        {
          device === 'mobile' &&
          <div className='flex-none'>
            <ColsSelectButton />
          </div>
        }
      </div>
    </div>
  );

}

export default memo(CategoriesNavbar);