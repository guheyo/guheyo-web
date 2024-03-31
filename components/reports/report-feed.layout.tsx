'use client';

export default function ReportFeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8 w-full mx-2 md:mx-0">{children}</div>
  );
}
