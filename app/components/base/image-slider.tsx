'use client';

import React, { useState } from 'react';
import _ from 'lodash';
import { Image } from 'prisma';
import NextImage from 'next/image';
import { IconButton } from '@mui/material';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider';

interface CarouselArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}

interface NavigationProps {
  activeIndex: number;
  length: number;
  instanceRef: React.MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>;
}
function Arrow({ disabled, onClick, left }: CarouselArrowProps) {
  return (
    <IconButton
      className={`w-[50px] h-[50px] absolute top-[45%] cursor-pointer ${
        disabled && 'hidden'
      } ${left ? 'left-[5px]' : 'left-[auto] right-[5px]'}`}
      disabled={disabled}
    >
      {left ? (
        <ChevronLeftIcon
          height={30}
          width={30}
          className="text-gray-200 stroke-[1.5]"
          onClick={onClick}
        />
      ) : (
        <ChevronRightIcon
          height={30}
          width={30}
          className="text-gray-200 stroke-[1.5]"
          onClick={onClick}
        />
      )}
    </IconButton>
  );
}

function Navigation({ activeIndex, length, instanceRef }: NavigationProps) {
  if (length < 2) return null;
  return (
    <div className="flex justify-center gap-2 z-50 mt-4 mb-4">
      {/* <div className="absolute bottom-2 md:bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2"> */}
      {_.range(length).map((index) => (
        <div
          role="presentation"
          aria-label="indicator"
          key={index}
          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
            activeIndex === index ? 'bg-gray-200 w-8' : 'bg-gray-300 w-4'
          }`}
          onClick={() => {
            instanceRef.current?.moveToIdx(index);
          }}
        />
      ))}
    </div>
  );
}

export default function ImageSlider({
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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setActiveIndex(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider h-[320px] md:h-[520px]">
          {_.map(images, (image, i) => (
            <div
              key={i}
              // className="flex justify-center items-center overflow-hidden h-[320px] md:h-[520px] "
              className="keen-slider__slide"
              style={{
                position: 'relative',
                // objectFit: 'cover',
              }}
            >
              <NextImage
                src={image.url}
                alt={image.name}
                width={width}
                height={height}
                // fill
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && images && images.length > 1 && (
          <div>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={activeIndex === 0}
            />
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                activeIndex ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      </div>
      {loaded && instanceRef.current && images && (
        <Navigation
          activeIndex={activeIndex}
          length={images.length}
          instanceRef={instanceRef}
        />
      )}
    </>
  );
}
