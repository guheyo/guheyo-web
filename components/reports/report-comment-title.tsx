'use client';

export default function ReportCommentTitle({
  hasContent,
}: {
  hasContent: boolean;
}) {
  return (
    <div className="flex flex-row gap-0 items-center text-yellow-500 text-sm md:text-base font-semibold">
      <div>{!hasContent ? '[피신고자 소명 부재]' : '[피신고자 소명]'}</div>
    </div>
  );
}
