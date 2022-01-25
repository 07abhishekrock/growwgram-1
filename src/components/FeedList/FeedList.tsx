import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeeds, selectFeeds } from "store/feed";
import { useInfiniteScroll } from "utils/hooks";
import { FeedCard } from "..";
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
      {feeds &&
        feeds.map((feed, idx) => {
          if (idx === feeds.length - 1)
            return (
              <div key={idx} ref={setLastElement}>
                <FeedCard feed={feed} />
              </div>
            );
          return <FeedCard key={idx} feed={feed} />;
        })}
      {loading && <h1>Loading...</h1>}
    </div>
  );
};

export default FeedList;
