'use client';

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineSeparator,
} from '@mui/lab';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import Avatar from '../avatar/avatar';

type TimelineEvent = {
  title: string;
  content: string;
  iconURL: string;
};

export default function TimelineWithIcon({
  timelineEvents,
}: {
  timelineEvents: TimelineEvent[];
}) {
  return (
    <div className="max-w-lg pl-12">
      <Timeline
        className="text-sm md:text-base"
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {timelineEvents.map((timelineEvent, index) => (
          <TimelineItem key={timelineEvent.title + index.toString()}>
            <TimelineSeparator>
              <Avatar
                name={timelineEvent.title}
                src={timelineEvent.iconURL}
                fontSize="text-base"
              />
              <TimelineConnector className="mt-2 mb-2 h-[60px] bg-slate-300" />
            </TimelineSeparator>
            <TimelineContent className="ml-2">
              <div className="font-mono">{timelineEvent.title}</div>
              <div className="font-mono text-gray-500 pt-4">
                {timelineEvent.content}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
