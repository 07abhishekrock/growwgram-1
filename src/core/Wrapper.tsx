import { Navbar } from "components";
import React, { useLayoutEffect } from "react";
import Modal from "react-modal";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { routes, RoutesType } from "routes/index";
import { store } from "store";
import { initializeTheme } from "utils";
import "styles/style.css";

Modal.setAppElement("#root");

function Wrapper() {
  useLayoutEffect(() => {
    initializeTheme();
  }, []);

  const renderRoutes = (routes: RoutesType[]) => {
    return routes.map(({ path, Component, routes: nestedRoutes }, i) => (
      <Route path={path} element={<Component />} key={i}>
        {nestedRoutes && renderRoutes(nestedRoutes)}
      </Route>
    ));
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="routes-container">
            <Routes>{renderRoutes(routes)}</Routes>
          </div>
        </div>
        <ToastContainer autoClose={2000} hideProgressBar />
      </BrowserRouter>
    </Provider>
  );
}

export default Wrapper;
