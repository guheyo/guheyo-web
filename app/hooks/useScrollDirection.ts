import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down': 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY- lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
  }, [scrollDirection]);
  return scrollDirection;
}