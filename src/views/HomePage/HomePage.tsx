import { FeedList, SuggestedUsers } from "components";
import React, { useEffect } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
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
    if (feeds.length == 0) dispatch(getFeeds());
  }, []);

  const scrollAction = () => {
    console.log("Reached API call");
    dispatch(getFeeds());
  };

  const reloadPosts = () => {
    dispatch(getFeeds(true));
  };

  return (
    <div className="hp12Body">
      <button className="hp12Button" onClick={reloadPosts}>
        <AiOutlineReload className="hp12Icon" /> Reload posts
      </button>
      <div className="hp12Wrapper">
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
    </div>
  );
}

export default HomePage;
