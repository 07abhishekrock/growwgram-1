import "./homePage.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { thunkSendMessage } from "store/feed";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkSendMessage());
  }, []);

  return <div>Home page</div>;
}

export default HomePage;
