import React, { useState, useRef } from "react";
import { useIntersection } from "utils/hooks";
import "./ImageRenderer.css";

interface Props {
  url: string;
  thumb: string;
}

const ImageRenderer: React.FC<Props> = ({ url, thumb }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div
      className="image-container"
      ref={imgRef}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {isInView && (
        <>
          <img
            className={`image thumb ${isLoaded && "isLoaded"}`}
            src={thumb}
          />
          <img
            className={`image ${isLoaded && "isLoaded"}`}
            src={url}
            onLoad={handleOnLoad}
          />
        </>
      )}
    </div>
  );
};

export default ImageRenderer;
