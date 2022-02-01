import { Outlet } from "react-router-dom";
import { ProfilePage, HomePage, NotFoundPage } from "views";

export interface RoutesType {
  path: string;
  Component: () => JSX.Element;
  routes?: RoutesType[];
}

export const routes: RoutesType[] = [
  {
    path: "user",
    Component: ProfilePage,
    routes: [
      {
        path: ":username",
        Component: Outlet as any,
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
