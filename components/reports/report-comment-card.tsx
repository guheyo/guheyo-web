import dayjs from 'dayjs';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

export default function ReportCommentCard({
  content,
  createdAt,
}: {
  content?: string;
  createdAt: Date;
}) {
  if (!content) {
    return (
      <div className="flex flex-col gap-2 rounded bg-dark-400 p-4">
        <div className="flex flex-row gap-0 items-center text-light-200 text-sm md:text-base font-semibold">
          <SubdirectoryArrowRightIcon />
          <div>[피신고자 소명 부재]</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 rounded bg-dark-400 p-4">
      <div className="flex flex-row gap-0 items-center text-light-200 text-sm md:text-base font-semibold">
        <SubdirectoryArrowRightIcon />
        <div>[피신고자 소명]</div>
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
