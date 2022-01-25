import React from "react";

import "./UserListItem.css";
import { SuggestedUser } from "store/feed";

interface Props {
  user: SuggestedUser;
}

const UserListItem: React.FC<Props> = ({ user }) => {
  return (
    <div className="uli12Body">
      <div className="uli12ImgContainer">
        <img src={user.profile_image.medium} alt={user.username} />
      </div>
      <p className="uli12Name">{user.name}</p>
    </div>
  );
};

export default UserListItem;
