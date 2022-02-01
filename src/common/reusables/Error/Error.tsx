import React from "react";
import { IoIosWarning } from "react-icons/io";

import "./error.css";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  message: string;
  retry?: () => void;
}

const Error = ({ message, retry, ...rest }: Props) => {
  return (
    <div className="e33Container" {...rest}>
      <IoIosWarning size={26} />
      <p className="e33Message">{message}</p>
      {retry && (
        <button onClick={retry} className="e33Button">
          Retry
        </button>
      )}
    </div>
  );
};

export default Error;
