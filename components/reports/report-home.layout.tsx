'use client';

export default function ReportHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-8 w-full md:w-3/4">{children}</div>
    </div>
  );
}
