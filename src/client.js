import React from "react";
import ReactDom from "react-dom";

import Wrapper from "core/Wrapper";
import { initializeTheme } from "./utils";

initializeTheme();

ReactDom.render(<Wrapper />, document.getElementById("root"));
