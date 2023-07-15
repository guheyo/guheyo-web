'use client';

import { Carousel, IconButton } from '@material-tailwind/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import _ from 'lodash';
import { Image } from 'prisma';
import NextImage from 'next/image';

export default function ImageCarousel ({
  images,
  sizes,
  width,
  height
}: {
  images: Image[] | undefined,
  sizes: string,
  width: number,
  height: number
}) {
  return (
    <Carousel
      loop={false}
      navigation={({ setActiveIndex, activeIndex, length }) => {
        if (length < 2) return null;
        return (
          <div className="absolute bottom-2 md:bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        );
      }}
      prevArrow={({loop, handlePrev, activeIndex, firstIndex}) => {
        if (firstIndex) return null;
        return (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 -translate-y-2/4 left-0 md:left-1"
          >
            <ChevronLeftIcon strokeWidth={2} className="w-6 h-6" />
          </IconButton>
        )
      }}
      nextArrow={({loop, handleNext, activeIndex, lastIndex}) => {
        if (lastIndex) return null;
        return (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 -translate-y-2/4 right-0 md:right-1"
          >
            <ChevronRightIcon strokeWidth={2} className="w-6 h-6" />
          </IconButton>
        )
      }}
    >
      {_.map(images, (image, i) => (
        <div
          key={i}
          className={`${sizes} flex justify-center items-center overflow-hidden`}
          style={{
            position: 'relative',
            objectFit: 'cover'
          }}>
          <NextImage
            src={image.url}
            alt={image.name}
            width={width}
            height={height}
            loading='lazy' />
        </div>
      ))}
    </Carousel>
  );
}
