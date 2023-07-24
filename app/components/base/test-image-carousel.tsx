'use client';

import _ from 'lodash';
import { memo, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import NextImage from 'next/image';
import { Image } from 'prisma';

interface Props {
  images: Image[] | undefined;
}

const TestImageCarousel = ({ images }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrev = () => {
    if (!images) return;
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };
  const handleNext = () => {
    if (!images) return;
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleClickToSlide = (slideIndex: number) => {
    setActiveIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {_.map(images, (image, index) => (
          <div key={index} className="w-full h-full relative flex-shrink-0">
            <NextImage
              src={image.url}
              alt={image.name}
              fill
              sizes="w-full h-full"
              className="absolute inset-0 w-full h-full "
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div>
        <div className="absolute bottom-4 w-full flex justify-center items-center gap-2">
          {_.map(images, (image, index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              type="button"
              onClick={() => handleClickToSlide(index)}
              className={`inline-block h-1 w-6 rounded-full  ${
                activeIndex === index ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <ChevronLeftIcon strokeWidth={2} className="w-6 h-6" />
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <ChevronRightIcon strokeWidth={2} className="w-6 h-6" />
      </button>
    </div>
  );
};

export default memo(TestImageCarousel);
