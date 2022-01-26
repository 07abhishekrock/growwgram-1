import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFeeds, selectUser } from "store/user";
import { useInfiniteScroll } from "utils/hooks";
import { ImageRenderer } from "..";
import "./GridView.css";

const GridView = () => {
  const dispatch = useDispatch();

  const {
    data: { photos, user },
  } = useSelector(selectUser);

  const { setLastElement } = useInfiniteScroll(() => {
    console.log("Reached API call");
    dispatch(getUserFeeds(user?.username!));
  });

  return (
    <div className="gv12Body">
      {photos.map((photo, i) => {
        if (i === photos.length - 1)
          return (
            <div className="gv12Image" ref={setLastElement} key={i}>
              <ImageRenderer
                thumb={photo.urls.thumb}
                url={photo.urls.regular}
              />
            </div>
          );
        return (
          <div key={i} className="gv12Image">
            <ImageRenderer thumb={photo.urls.thumb} url={photo.urls.regular} />
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
