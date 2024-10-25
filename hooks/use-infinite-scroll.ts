import { useCallback } from 'react';

export const useInfiniteScroll = (fetchNext: () => void, hasNext?: boolean) => {
  const setRef = useCallback(
    (node: HTMLElement | null) => {
      if (!node || !hasNext) return undefined;

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
      observer.observe(node);

      return () => observer.disconnect();
    },
    [fetchNext, hasNext],
  );

  return setRef;
};
