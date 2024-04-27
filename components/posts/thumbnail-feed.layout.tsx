'use client';

function ThumbnailFeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-x-0 md:gap-x-6 gap-y-2 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {children}
    </div>
  );
}

export default ThumbnailFeedLayout;
