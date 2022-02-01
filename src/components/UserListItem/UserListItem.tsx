import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";

import { SuggestedUser } from "store/feed";
import { formatNumberString } from "utils/helpers";
import "./userListItem.css";

interface Props {
  user: SuggestedUser;
}

const UserListItem: React.FC<Props> = ({ user }) => {
  return (
    <Link className="uli12Link" to={`/user/${user.username}`}>
      <div className="uli12Body">
        <div className="uli12ImgContainer">
          <div className="uli12Img">
            <img src={user.profile_image?.medium} alt={user.username} />
          </div>
        </div>
        <div className="uli12Details">
          <p className="uli12Name">{user.name}</p>
          <div className="uli12Stats">
            {user.total_likes !== null && user.total_likes !== undefined && (
              <p>
                <AiFillHeart className="uli12Icon" />{" "}
                {formatNumberString(user.total_likes)}
              </p>
            )}

            {user.total_photos !== null && user.total_photos !== undefined && (
              <p>
                <IoMdPhotos className="uli12Icon" />{" "}
                {formatNumberString(user.total_photos)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserListItem;
