import { ProfilePage, HomePage, NotFoundPage } from "views";

const routes = [
  {
    path: "/user/:userId",
    Component: ProfilePage,
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

export default routes;
