import { useCallback, useRef } from 'react';


export const useDebounce = (delay = 300, notDelayInFirstTime = true) => {
  const isFirstTime = useRef(notDelayInFirstTime);
  const debouncing = useRef<NodeJS.Timeout>();


  const debounce = useCallback((func: () => void) => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      func();
    } else {
      if (debouncing.current) {
        clearTimeout(debouncing.current);
      }
      debouncing.current = setTimeout(() => func(), delay);
    }
  }, [delay]);

  return { debounce };
};
