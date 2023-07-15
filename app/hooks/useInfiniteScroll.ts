import React, { useEffect } from "react";

export const useInfiniteScroll = (
  ref: React.RefObject<any>,
  fetchNext: () => void
) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            fetchNext();
          }
        })
      }, {
        rootMargin: '300px',
        threshold: 1
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, fetchNext]);
}