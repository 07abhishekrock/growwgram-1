import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "styles/style.css";
import routes from "routes/";
import { Navbar } from "components";

function Wrapper() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="routes-container">
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Wrapper;
