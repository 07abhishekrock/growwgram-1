import React, { useLayoutEffect } from "react";
import Modal from "react-modal";
import { Provider } from "react-redux";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store } from "store";
import { HomePage, NotFoundPage, ProfilePage } from "views";
import { Navbar } from "components";
import { initializeTheme } from "utils";
import "styles/style.css";

Modal.setAppElement("#root");

function Wrapper() {
  useLayoutEffect(() => {
    initializeTheme();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="routes-container">
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route
                path="user"
                element={
                  <>
                    <Outlet />
                  </>
                }
              >
                <Route path=":username" element={<ProfilePage />} />
              </Route>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </div>
        <ToastContainer autoClose={2000} hideProgressBar />
      </BrowserRouter>
    </Provider>
  );
}

export default Wrapper;
