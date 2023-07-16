import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { KeenSliderInstance, KeenSliderHooks, useKeenSlider } from 'keen-slider/react'
import _ from 'lodash'
import { Image } from 'prisma';
import NextImage from 'next/image';

function Arrow({
  disabled,
  onClick,
  left
}: {
  disabled: boolean,
  onClick: React.MouseEventHandler,
  left?: boolean
}) {
  const opacity = disabled ? `opacity-20` : `opacity-100`;
  if (left) {
    return (
      <svg
        onClick={onClick}
        className={`arrow absolute left-0 top-1/2 w-4 h-4 md:w-6 md:h-6 arrow--left fill-white ${opacity}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    )
  }
  return (
    <svg
      onClick={onClick}
      className={`arrow absolute right-0 top-1/2 w-4 h-4 md:w-6 md:h-6 arrow--right fill-white ${opacity}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}

function Dots({
  instanceRef,
  currentSlide
}: {
  instanceRef: React.MutableRefObject<KeenSliderInstance<{}, {}, KeenSliderHooks> | null>,
  currentSlide: number
}) {
  const slides = instanceRef.current?.track.details.slides;
  if (!slides) return null;
  return (
    <div>
      {
        slides.map((slide, i) => {
          const opacity = currentSlide === i ? `opacity-100` : `opacity-20`;
          return (
            <button
              type='submit'
              aria-label='dot'
              key={slide.abs}
              className={`dot m-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-black ${opacity}`}
              onClick={() => instanceRef.current?.moveToIdx(i)}
            />
          )
        })
      }
    </div>
  )
}

export default function ImageSlider ({
  images,
  sizes,
  fill,
  width,
  height
}: {
  images: Image[] | undefined,
  sizes: string,
  fill: boolean,
  width?: number,
  height?: number
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  if (_.isUndefined(images) || _.isEmpty(images)) return null;

  return (
    <div className='relative'>
      <div ref={sliderRef} className="keen-slider">
        {_.map(images, (image, i) => (
          <div key={i} className={`${sizes} flex justify-center items-center`}
            style={{
              position: 'relative',
              objectFit: 'cover'
            }}
          >
            {
              fill &&
              <NextImage
                className={`keen-slider__slide number-slide${i}`}
                src={image.url}
                alt="Preview image"
                fill
                loading='lazy' />
            }
            {
              !fill &&
              <NextImage
                className={`keen-slider__slide number-slide${i}`}
                src={image.url}
                alt="Preview image"
                width={width}
                height={height}
                loading='lazy' />
            }
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (images.length > 1) && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />
          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
        <div>
          {
            loaded && instanceRef.current && (images.length > 1) && (
              <Dots instanceRef={instanceRef} currentSlide={currentSlide} />
            )
          }
        </div>
      </div>
    </div>
  )
}