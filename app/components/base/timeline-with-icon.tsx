'use client'

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from '@material-tailwind/react'
import Image from 'next/image'
import {memo} from 'react'

interface TimelineEvent {
  timelineEvents: {
    title: string
    content: string
    iconURL: string
  }[]
}

const TimelineWithIcon = ({timelineEvents}: TimelineEvent[]) => {
  return (
    <div className='max-w-lg'>
      <Timeline className='text-sm md:text-base'>
        {timelineEvents.map((timelineEvent, i) => (
          <TimelineItem key={i}>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon color='white'>
                <Image
                  loading='lazy'
                  className='rounded-full'
                  src={timelineEvent.iconURL}
                  alt={'icon'}
                  width={32}
                  height={32}
                />
              </TimelineIcon>
              <div className='font-semibold'>{timelineEvent.title}</div>
            </TimelineHeader>
            <TimelineBody className='pb-8'>
              <div className='font-normal text-gray-600'>{timelineEvent.content}</div>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

export default memo(TimelineWithIcon)
