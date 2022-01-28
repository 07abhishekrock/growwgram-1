import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFeeds, selectUser } from "store/user";
import { useInfiniteScroll } from "utils/hooks";
import { ImageRenderer, Skeleton } from "..";
import "./GridView.css";

interface Props {
  handleClick: (idx: number) => void;
}

const GridView: React.FC<Props> = ({ handleClick }) => {
  const dispatch = useDispatch();

  const {
    data: { photos, user },
    complete,
  } = useSelector(selectUser);

  const { lastElement, setLastElement, unObserve } = useInfiniteScroll(() => {
    console.log("Reached API call", user);
    dispatch(getUserFeeds(user?.username!));
  });

  useEffect(() => {
    if (complete && lastElement) unObserve();
  }, [complete, lastElement]);

  return (
    <div className="gv12Body">
      {photos.length > 0
        ? photos.map((photo, i) => {
            if (i === photos.length - 1)
              return (
                <div
                  className="gv12Image"
                  ref={setLastElement}
                  key={i}
                  onClick={() => handleClick(i)}
                >
                  <ImageRenderer
                    thumb={photo.urls.thumb}
                    url={photo.urls.regular}
                  />
                </div>
              );
            return (
              <div key={i} className="gv12Image" onClick={() => handleClick(i)}>
                <ImageRenderer
                  thumb={photo.urls.thumb}
                  url={photo.urls.regular}
                />
              </div>
            );
          })
        : Array.from(Array(12)).map((_, i) => (
            <div key={i} className="gv12Image">
              <Skeleton style={{ width: "100%", height: "100%" }} />
            </div>
          ))}
    </div>
  );
};

export default GridView;
