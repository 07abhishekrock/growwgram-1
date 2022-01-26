import React from "react";
import { Skeleton } from "..";
import "./UserListItem.css";

const UserListItem: React.FC = () => {
  return (
    <div className="uli12Body">
      <div className="uli12ImgContainer">
        <Skeleton type="circle" style={{ height: "40px", width: "40px" }} />
      </div>
      <div className="uli12Details">
        <Skeleton
          style={{
            width: "90px",
            height: "20px",
            borderRadius: "4px",
          }}
        />
        <Skeleton
          style={{
            width: "120px",
            height: "15px",
            marginTop: "5px",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
};

export default UserListItem;
