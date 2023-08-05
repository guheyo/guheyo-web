'use client';

import React from 'react';
import _ from 'lodash';
import { Image } from 'prisma';
import NextImage from 'next/image';
import Carousel from 'react-material-ui-carousel';

// indicator 변경 시 사용 가능하므로 임시 주석
// function Navigation({
//   setActiveIndex,
//   activeIndex,
//   length,
// }: {
//   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
//   activeIndex: number;
//   length: number;
// }) {
//   if (length < 2) return null;
//   return (
//     <div className="absolute bottom-2 md:bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//       {_.range(length).map((index) => (
//         <button
//           type="submit"
//           aria-label="indicator"
//           key={index}
//           className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//             activeIndex === index ? 'bg-white w-8' : 'bg-white/50 w-4'
//           }`}
//           onClick={() => setActiveIndex(index)}
//         />
//       ))}
//     </div>
//   );
// }

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
  if (!images) return null;

  return (
    <Carousel
      fullHeightHover
      swipe
      autoPlay={false}
      navButtonsAlwaysVisible
      indicatorContainerProps={{
        style: {
          margin: '0px',
          paddingBottom: '10px',
          borderTop: '1px solid rgb(243 244 246)',
        },
      }}
      animation="slide"
      cycleNavigation={false}
      className="lg:w-[520px] md:w-[380px] full h-full"
    >
      {_.map(images, (image, i) => (
        <div
          key={i}
          className={`${sizes} flex justify-center items-center overflow-hidden h-[320px] md:h-[520px]`}
          style={{
            position: 'relative',
            objectFit: 'cover',
          }}
        >
          <NextImage
            src={image.url}
            alt={image.name}
            width={width}
            height={width}
            loading="lazy"
          />
        </div>
      ))}
    </Carousel>
  );
}
