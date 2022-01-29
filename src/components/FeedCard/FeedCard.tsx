import React from "react";
import {
  AiFillHeart,
  AiOutlineLink,
  AiOutlineCloudDownload,
} from "react-icons/ai";

import "./FeedCard.css";
import { Feed, FeedActionTypes } from "store/feed";
import { ImageRenderer, UserListItem } from "..";
import { copyToClipboard, getTimeFrom } from "utils/helpers";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

interface Props {
  feed: Feed;
  idx: number;
}

const FeedCard: React.FC<Props> = ({ feed, idx }) => {
  const dispatch = useDispatch();

  const copyLink = async () => {
    try {
      await copyToClipboard(feed.links.html);
      toast("Copied to clipboard!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (feed.liked) {
      dispatch({ type: FeedActionTypes.UNLIKE, payload: { idx } });
    } else {
      dispatch({ type: FeedActionTypes.LIKE, payload: { idx } });
    }
  };

  return (
    <div className="fc12Body">
      <div className="fc12ImageContainer">
        <ImageRenderer url={feed.urls.regular} thumb={feed.urls.thumb} />
      </div>
      <div className="fc12Content">
        <div className="fc12Stats">
          <div className={`fc12LikeContainer ${feed.liked && "fc12Liked"} `}>
            <button className="fc12IconContainer" onClick={handleClick}>
              <AiFillHeart size={22} className="fc12Icon" />
            </button>
            <p>{feed.likes.toLocaleString("en-IN")}</p>
          </div>
          <button
            className="fc12IconContainer"
            title="Copy to Clipboard"
            onClick={copyLink}
          >
            <AiOutlineLink size={24} className="fc12Icon" />
          </button>
          <a
            href={feed.urls.regular}
            className="fc12IconContainer"
            title="Download"
          >
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
