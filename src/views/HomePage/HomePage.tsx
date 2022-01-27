import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FeedList, SuggestedUsers } from "components";
import { getFeeds, selectFeeds } from "store/feed";
import "./homePage.css";

function HomePage() {
  const dispatch = useDispatch();
  const {
    data: { feeds },
    loading,
    complete,
  } = useSelector(selectFeeds);

  useEffect(() => {
    dispatch(getFeeds());
  }, []);

  const scrollAction = () => {
    console.log("Reached API call");
    dispatch(getFeeds());
  };

  return (
    <div className="hp12Body">
      <div className="hp12FeedContainer">
        <FeedList
          complete={complete || false}
          data={feeds}
          loading={loading}
          scrollAction={scrollAction}
        />
      </div>
      <div className="hp12SuggestedContainer">
        <SuggestedUsers />
      </div>
    </div>
  );
}

export default HomePage;
