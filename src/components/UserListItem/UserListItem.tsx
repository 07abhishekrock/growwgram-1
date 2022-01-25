import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";

import "./UserListItem.css";
import { SuggestedUser } from "store/feed";
import { formatNumberString } from "utils/helpers";

interface Props {
  user: SuggestedUser;
}

const UserListItem: React.FC<Props> = ({ user }) => {
  return (
    <div className="uli12Body">
      <div className="uli12ImgContainer">
        <div className="uli12Img">
          <img src={user.profile_image.medium} alt={user.username} />
        </div>
      </div>
      <div className="uli12Details">
        <p className="uli12Name">{user.name}</p>
        <div className="uli12Stats">
          <p>
            <AiFillHeart className="uli12Icon" />{" "}
            {formatNumberString(user.total_likes)}
          </p>

          <p>
            <IoMdPhotos className="uli12Icon" />{" "}
            {formatNumberString(user.total_photos)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
