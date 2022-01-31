import React from "react";

import "./skeleton.css";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  type?: "rectangle" | "circle";
  height?: number;
  width?: number;
}

const Skeleton: React.FC<Props> = ({ type, style, ...rest }) => {
  return (
    <div
      {...rest}
      className="sk12Body"
      style={{ ...(type === "circle" && { borderRadius: "50%" }), ...style }}
    ></div>
  );
};

export default Skeleton;
