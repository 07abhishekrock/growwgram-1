import { Outlet } from "react-router-dom";
import { ProfilePage, HomePage, NotFoundPage } from "views";

export const routes = [
  {
    path: "user",
    Component: ProfilePage,
    routes: [
      {
        path: ":username",
        Component: Outlet,
      },
    ],
  },
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
];
