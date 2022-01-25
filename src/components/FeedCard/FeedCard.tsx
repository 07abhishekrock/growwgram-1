import React from "react";
import {
  AiFillHeart,
  AiOutlineLink,
  AiOutlineCloudDownload,
} from "react-icons/ai";

import "./FeedCard.css";
import { Feed } from "store/feed";
import { UserListItem } from "..";
import { getTimeFrom } from "utils/helpers";

interface Props {
  feed: Feed;
}

const FeedCard: React.FC<Props> = ({ feed }) => {
  return (
    <div className="fc12Body">
      <div className="fc12ImageContainer">
        <img src={feed.urls.regular} alt={feed.alt_description} />
      </div>
      <div className="fc12Content">
        <div className="fc12Stats">
          <p>
            <AiFillHeart size={22} className="fc12Icon" />
            {feed.likes.toLocaleString("en-IN")}
          </p>
          <a href={feed.links.html} title="Photo Link">
            <AiOutlineLink size={24} className="fc12Icon" />
          </a>
          <a href={feed.links.download} title="Download">
            <AiOutlineCloudDownload
              size={24}
              className="fc12Icon"
              style={{ margin: "0px" }}
            />
          </a>
        </div>
        <div className="fc12Description">
          <p>{feed.description}</p>
          <p className="fc12Time">{getTimeFrom(feed.created_at)}</p>
        </div>

        <UserListItem user={feed.user as any} />
      </div>
    </div>
  );
};

export default FeedCard;
