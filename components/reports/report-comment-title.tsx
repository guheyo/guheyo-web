'use client';

export default function ReportCommentTitle({
  index,
  hasContent,
}: {
  index: number;
  hasContent: boolean;
}) {
  return (
    <div className="flex flex-row gap-0 items-center text-yellow-500 text-sm md:text-base font-semibold">
      <div>
        {!hasContent ? `[소명 ${index + 1}] 무응답` : `[소명 ${index + 1}]`}
      </div>
    </div>
  );
}
