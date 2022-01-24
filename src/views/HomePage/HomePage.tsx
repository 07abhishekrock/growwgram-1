import "./homePage.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFeeds } from "store/feed";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeeds());
  }, []);

  return <div>Home page</div>;
}

export default HomePage;
