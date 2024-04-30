'use client';

function ThumbnailFeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-x-0 md:gap-x-4 gap-y-2 md:gap-y-12 grid-cols-1 md:grid-cols-2">
      {children}
    </div>
  );
}

export default ThumbnailFeedLayout;
