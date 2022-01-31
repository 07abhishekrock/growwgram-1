import React from "react";

import { Skeleton } from "common/reusables";
import "./gridView.css";

const GridViewSkeleton = () => {
  return (
    <div className="gv12Body">
      {Array.from(Array(12)).map((_, i) => (
        <div key={i} className="gv12Image">
          <Skeleton style={{ width: "100%", height: "100%" }} />
        </div>
      ))}
    </div>
  );
};

export default GridViewSkeleton;
