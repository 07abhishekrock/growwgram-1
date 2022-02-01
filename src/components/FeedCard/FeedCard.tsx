import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineLink,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import "./feedCard.css";
import { Feed, FeedActionTypes } from "store/feed";
import { UserListItem } from "components";
import { copyToClipboard, getTimeFrom } from "utils/helpers";
import { ImagePreview, ImageRenderer } from "common/reusables";
import { User } from "store/user";

interface Props {
  feed: Feed;
  idx: number;
}

const FeedCard: React.FC<Props> = ({ feed, idx }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

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

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="fc12Body">
      <button className="fc12ImageContainer" onClick={() => setOpen(true)}>
        <ImageRenderer url={feed.urls.regular} thumb={feed.urls.thumb} />
      </button>
      <div className="fc12Content">
        <div className="fc12Stats">
          <div className={`fc12LikeContainer`}>
            <button
              className={`fc12IconContainer ${feed.liked && "fc12Liked"}`}
              onClick={handleClick}
            >
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
            style={{ margin: "0px" }}
          >
            <AiOutlineCloudDownload
              size={24}
              className="fc12Icon"
              style={{ margin: "0px" }}
            />
          </a>
        </div>
        <div className="fc12Description">
          <p>{feed.description ?? "Added a new photo"}</p>
          <p className="fc12Time">{getTimeFrom(feed.created_at)}</p>
        </div>

        <UserListItem user={feed.user as Partial<User>} />
      </div>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        className="fc12Modal"
        overlayClassName="fc12Overlay"
      >
        <ImagePreview feed={feed} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default FeedCard;
