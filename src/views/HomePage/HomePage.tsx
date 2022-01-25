import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { FeedList, SuggestedUsers } from "components";
import { getFeeds } from "store/feed";
import "./homePage.css";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeeds());
  }, []);

  return (
    <div className="hp12Body">
      <div className="hp12FeedContainer">
        <FeedList />
      </div>
      <div className="hp12SuggestedContainer">
        <SuggestedUsers />
      </div>
    </div>
  );
}

export default HomePage;
