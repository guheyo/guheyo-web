import dayjs from 'dayjs';

export default function ReportCard({
  index,
  title,
  content,
  createdAt,
}: {
  index: number;
  title: string;
  content?: string | null;
  createdAt: Date;
}) {
  return (
    <div className="flex flex-col gap-2 rounded bg-dark-400 p-4">
      <div className="text-red-500 text-sm md:text-base font-semibold">
        {`[신고 ${index + 1}] ${title}`}
      </div>
      <div className="text-light-200 font-light text-xs md:text-sm">
        {content}
      </div>
      <div className="text-dark-200 text-xs md:text-sm">
        {dayjs(createdAt).fromNow()}
      </div>
    </div>
  );
}
