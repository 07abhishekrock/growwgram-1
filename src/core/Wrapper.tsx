import { Navbar } from "components";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "store";
import "styles/style.css";
import { HomePage, ProfilePage } from "views";

function Wrapper() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="routes-container">
            <Routes>
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
