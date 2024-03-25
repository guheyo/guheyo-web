'use client';

export default function ReportCommentTitle({ index }: { index: number }) {
  return (
    <div className="flex flex-row gap-0 items-center text-yellow-500 text-sm md:text-base font-semibold">
      <div>{`[소명 ${index + 1}]`}</div>
    </div>
  );
}
