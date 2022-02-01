import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import ReactSlider from "react-slider";

import { Feed } from "store/feed";
import "./imagePreview.css";

interface Props {
  feed: Feed;
  closeModal: () => void;
}

const MIN = 0.1;
const MAX = 2;
const STEP = 0.02;

const ImagePreview = ({ closeModal, feed }: Props) => {
  const [zoom, setZoom] = useState(1);

  const handleChange = (value: number) => {
    setZoom(value);
  };

  const decreaseZoom = () => {
    setZoom((prev) => prev - STEP);
  };

  const increaseZoom = () => {
    setZoom((prev) => prev + STEP);
  };

  return (
    <>
      <div className="ip46TopBar">
        <div className="ip46ZoomContainer">
          <button
            className="ip46Icon"
            disabled={zoom === MIN}
            onClick={decreaseZoom}
          >
            <AiOutlineMinus />
          </button>
          <ReactSlider
            className="ip46HorizontalSlider"
            trackClassName="ip46Track"
            thumbClassName="ip46Thumb"
            renderThumb={(props) => (
              <div {...props}>
                <p className="ip46Tooltip">{Math.round(zoom * 100)}%</p>
              </div>
            )}
            min={MIN}
            max={MAX}
            defaultValue={zoom}
            value={zoom}
            onChange={handleChange}
            step={STEP}
          />
          <button
            className="ip46Icon"
            disabled={zoom === MAX}
            onClick={increaseZoom}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <button className="ip46Icon" onClick={closeModal}>
          <IoCloseOutline size={30} className="ip46Close" />
        </button>
      </div>
      <div
        className="ip46ImageWrapper"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url('${feed.urls.small}')`,
        }}
      >
        <div className="ip46Background">
          <img
            src={feed.urls.regular}
            alt={feed.alt_description}
            className="ip46Image"
            style={{ transform: `scale(${zoom},${zoom})` }}
          />
        </div>
      </div>
    </>
  );
};

export default ImagePreview;
