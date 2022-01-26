import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeeds, selectFeeds } from "store/feed";
import { useInfiniteScroll } from "utils/hooks";
import { FeedCard, FeedSkeleton } from "..";
import "./FeedList.css";

const FeedList = () => {
  const { data, loading } = useSelector(selectFeeds);
  const dispatch = useDispatch();
  const { setLastElement } = useInfiniteScroll(() => {
    console.log("Reached API call");
    dispatch(getFeeds());
  });

  const { feeds } = data;

  return (
    <div className="fl14Body">
      {feeds.length
        ? feeds.map((feed, idx) => {
            if (idx === feeds.length - 1)
              return (
                <div key={idx} ref={setLastElement}>
                  <FeedCard feed={feed} />
                </div>
              );
            return <FeedCard feed={feed} key={idx} />;
          })
        : Array.from(Array(5)).map((_, i) => <FeedSkeleton key={i} />)}
      {feeds.length > 0 && loading && <FeedSkeleton />}
    </div>
  );
};

export default FeedList;
