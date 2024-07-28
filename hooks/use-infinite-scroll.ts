import React, { useEffect } from 'react';

export const useInfiniteScroll = (
  ref: React.RefObject<any>,
  fetchNext: () => void,
  hasNext?: boolean,
) => {
  useEffect(() => {
    if (!ref.current || !hasNext) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchNext();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '300px',
        threshold: 0,
      },
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, fetchNext, hasNext]);
};
