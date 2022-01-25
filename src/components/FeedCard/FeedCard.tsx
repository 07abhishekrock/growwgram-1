import React from "react";

import "./FeedCard.css";
import { Feed } from "store/feed";
import { UserListItem } from "..";

interface Props {
  feed: Feed;
}

const FeedCard: React.FC<Props> = ({ feed }) => {
  return (
    <div className="fc12Body">
      <div className="fc12ImageContainer">
        <img src={feed.urls.regular} alt={feed.description} />
      </div>
      <UserListItem user={feed.user as any} />
    </div>
  );
};

export default FeedCard;
