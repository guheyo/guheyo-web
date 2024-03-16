'use client';

export default function ReportHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-8 w-full md:w-3/4 mx-2 md:mx-0">
        {children}
      </div>
    </div>
  );
}
