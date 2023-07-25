import { useEffect, RefObject, useCallback } from 'react';

type Event = MouseEvent | TouchEvent;

/**
 * @description Hook that handles click outside of a component
 * @param ref - React ref object
 * @param handler - function to be called when click outside
 */
const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: Event) => void,
) => {
  const handleClickOutside = useCallback(
    (event: Event) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    },
    [ref, handler],
  );
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickOutside;
