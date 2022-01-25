import React from "react";
import { useSelector } from "react-redux";

import "./SuggestedUsers.css";
import { selectFeeds } from "store/feed";
import { UserListItem } from "..";

const SuggestedUsers = () => {
  const { data, loading } = useSelector(selectFeeds);
  const { suggestedUsers } = data;

  return (
    <div className="su13Body">
      <p className="su13Title">Suggestions for you</p>
      {!loading && suggestedUsers.map((user) => <UserListItem user={user} />)}
    </div>
  );
};

export default SuggestedUsers;
