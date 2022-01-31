import React, { useState, useRef } from "react";
import { useIntersection } from "common/hooks";
import "./imageRenderer.css";

interface Props {
  url: string;
  thumb: string;
  height?: number;
  width?: number;
}

const ImageRenderer: React.FC<Props> = ({ url, thumb, height, width }) => {
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
            style={{ ...(height && { height }), ...(width && { width }) }}
          />
          <img
            className={`image ${isLoaded && "isLoaded"}`}
            src={url}
            onLoad={handleOnLoad}
            style={{ ...(height && { height }), ...(width && { width }) }}
          />
        </>
      )}
    </div>
  );
};

export default ImageRenderer;
