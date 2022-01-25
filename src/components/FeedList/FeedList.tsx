import React from "react";
import { useSelector } from "react-redux";

import "./FeedList.css";
import { selectFeeds } from "store/feed";
import { FeedCard } from "..";

const FeedList = () => {
  const { data, loading } = useSelector(selectFeeds);
  const { feeds } = data;

  return (
    <div className="fl14Body">
      {!loading && feeds.map((feed) => <FeedCard key={feed.id} feed={feed} />)}
    </div>
  );
};

export default FeedList;
