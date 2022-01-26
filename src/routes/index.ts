import { ProfilePage, HomePage } from "views";

const routes = [
  {
    path: "/user/:userId",
    Component: ProfilePage,
  },
  {
    path: "/",
    Component: HomePage,
  },
];

export default routes;
