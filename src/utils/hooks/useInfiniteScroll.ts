import { useEffect, useRef, useState } from "react";

const useInfiniteScroll = (cb: () => void) => {
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
  const observerRef = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        cb();
      }
    })
  );

  const unObserve = () => {
    const currentElement = lastElement;
    const currentObserver = observerRef.current;

    if (currentElement) {
      currentObserver.unobserve(currentElement);
    }
  };

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observerRef.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return { lastElement, setLastElement, unObserve };
};

export default useInfiniteScroll;
