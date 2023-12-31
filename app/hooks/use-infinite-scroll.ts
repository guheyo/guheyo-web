import React, { useEffect } from 'react';

export const useInfiniteScroll = (
  ref: React.RefObject<any>,
  fetchNext: () => void,
  hasNext?: boolean,
) => {
  useEffect(() => {
    if (!ref.current) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !!hasNext) {
            fetchNext();
          }
        });
      },
      {
        rootMargin: '300px',
        threshold: 1,
      },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, fetchNext, hasNext]);
};
