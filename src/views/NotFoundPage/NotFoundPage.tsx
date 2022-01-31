import React from "react";

import NotFoundSvg from "assets/404.svg";
import "./notFoundPage.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="nfp22Body">
      <img className="nfp22Img" src={NotFoundSvg} alt="Page not Found" />
      <div className="nfp22Text">Looks like you are lost!</div>
      <Link className="nfp22Link" to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
