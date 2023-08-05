'use client';

import React, { useState } from 'react';
import _ from 'lodash';
import { Image } from 'prisma';
import NextImage from 'next/image';
import Carousel from 'react-material-ui-carousel';

// indicator 변경 시 사용 가능하므로 임시 주석
function Navigation({
  setActiveIndex,
  activeIndex,
  length,
}: {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
  length: number;
}) {
  if (length < 2) return null;
  return (
    <div className="absolute bottom-2 md:bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
      {_.range(length).map((index) => (
        <div
          aria-label="indicator"
          key={index}
          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
            activeIndex === index ? 'bg-gray-200 w-8' : 'bg-gray-300 w-4'
          }`}
          // onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}

export default function ImageCarousel({
  images,
  sizes,
  width,
  height,
}: {
  images: Image[] | undefined;
  sizes: string;
  width: number;
  height: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images) return null;

  return (
    <Carousel
      fullHeightHover={false}
      swipe
      autoPlay={false}
      navButtonsAlwaysVisible
      indicatorContainerProps={{
        className: 'absolute top-[300px] md:top-[510px] m-0 pb-[10px] z-2',
      }}
      IndicatorIcon={
        <Navigation
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          length={images.length}
        />
      }
      navButtonsWrapperProps={{
        className: 'absolute md:top-[220px] top-[120px]',
      }}
      animation="slide"
      cycleNavigation={false}
      className="full h-full"
      onChange={(index) => {
        if (index !== undefined || index) {
          setActiveIndex(index);
        }
      }}
    >
      {_.map(images, (image, i) => (
        <div
          key={i}
          className="flex justify-center items-center overflow-hidden h-[320px] md:h-[520px] "
          style={{
            position: 'relative',
            objectFit: 'cover',
          }}
        >
          <NextImage
            src={image.url}
            alt={image.name}
            width={768}
            height={768}
            loading="lazy"
          />
        </div>
      ))}
    </Carousel>
  );
}
