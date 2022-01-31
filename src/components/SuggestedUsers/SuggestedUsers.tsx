import React from "react";
import { useSelector } from "react-redux";

import { selectFeeds } from "store/feed";
import { UserListItem, UserListItemSkeleton } from "components";
import "./suggestedUsers.css";

const SuggestedUsers = () => {
  const { data } = useSelector(selectFeeds);
  const { suggestedUsers } = data;

  return (
    <div className="su13Body">
      <p className="su13Title">Suggestions for you</p>
      {suggestedUsers.length > 0
        ? suggestedUsers.map((user) => (
            <UserListItem key={user.id} user={user} />
          ))
        : Array.from(Array(5)).map((_, i) => <UserListItemSkeleton key={i} />)}
    </div>
  );
};

export default SuggestedUsers;
