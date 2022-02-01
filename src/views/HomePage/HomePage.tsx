import { Error } from "common/reusables";
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
    errors,
  } = useSelector(selectFeeds);

  useEffect(() => {
    if (feeds.length == 0) dispatch(getFeeds());
  }, []);

  const scrollAction = () => {
    dispatch(getFeeds());
  };

  const reloadPosts = () => {
    dispatch(getFeeds(true));
  };

  if (errors && feeds.length === 0) {
    return (
      <Error
        message="Some error occurred"
        style={{ marginTop: "30px" }}
        retry={() => {
          dispatch(getFeeds(true));
        }}
      />
    );
  }

  return (
    <div className="hp12Body">
      <button className="hp12Button" onClick={reloadPosts}>
        <AiOutlineReload className="hp12Icon" /> Refresh Feed
      </button>
      <div className="hp12Wrapper">
        <div className="hp12FeedContainer">
          <FeedList
            complete={complete || false}
            data={feeds}
            loading={loading}
            scrollAction={scrollAction}
          />
          {errors && (
            <Error
              message="Some error occurred"
              retry={() => {
                dispatch(getFeeds());
              }}
            />
          )}
        </div>
        <div className="hp12SuggestedContainer">
          <SuggestedUsers />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
