import React from "react";
import { Skeleton, UserListItemSkeleton } from "..";
import "./FeedCard.css";

const FeedSkeleton: React.FC = () => {
  return (
    <div className="fc12Body">
      <div className="fc12ImageContainer">
        <Skeleton />
      </div>
      <div className="fc12Content">
        <div className="fc12Stats">
          <Skeleton
            style={{
              width: "60px",
              height: "25px",
              marginRight: "auto",
              borderRadius: "4px",
            }}
          />
        </div>
        <div className="fc12Description">
          <Skeleton
            style={{
              height: "30px",
              borderRadius: "4px",
            }}
          />
        </div>

        <UserListItemSkeleton />
      </div>
    </div>
  );
};

export default FeedSkeleton;
