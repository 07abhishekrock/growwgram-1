import { useEffect, useRef, useState } from "react";

const useInfiniteScroll = (cb: () => void) => {
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);

  const observerRef = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          cb();
        }
      },
      { rootMargin: "200px" }
    )
  );

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

  return { setLastElement };
};

export default useInfiniteScroll;
