import React, { useEffect, useMemo } from "react";
import { Feed } from "store";
import { useInfiniteScroll } from "utils/hooks";
import { FeedCard, FeedSkeleton } from "..";
import "./FeedList.css";

interface Props {
  scrollAction: () => void;
  data: Feed[];
  loading: boolean;
  complete: boolean;
  scrollIdx?: number | null;
}

const FeedList: React.FC<Props> = ({
  data,
  complete,
  loading,
  scrollAction,
  scrollIdx,
}) => {
  const { lastElement, setLastElement, unObserve } = useInfiniteScroll(() => {
    scrollAction();
  });

  const refs = useMemo(() => {
    return data.reduce((acc: any, _, idx) => {
      acc[idx] = React.createRef();
      return acc;
    }, {});
  }, [data]);

  useEffect(() => {
    if (scrollIdx) {
      refs[scrollIdx].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  useEffect(() => {
    if (complete && lastElement) unObserve();
  }, [complete, lastElement]);

  return (
    <div className="fl14Body">
      {data.length > 0
        ? data.map((feed, idx) => {
            if (idx === data.length - 1)
              return (
                <div
                  className="fl14LastElement"
                  key={idx}
                  ref={(el) => {
                    if (scrollIdx) refs[idx].current = el;
                    setLastElement(el);
                  }}
                >
                  <FeedCard idx={idx} feed={feed} />
                </div>
              );
            return (
              <div
                className="fl14LastElement"
                key={idx}
                ref={(el) => {
                  refs[idx].current = el;
                }}
              >
                <FeedCard idx={idx} feed={feed} key={idx} />
              </div>
            );
          })
        : Array.from(Array(5)).map((_, i) => <FeedSkeleton key={i} />)}
      {data.length > 0 && loading && <FeedSkeleton />}
    </div>
  );
};

export default FeedList;
