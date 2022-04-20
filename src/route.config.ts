import IndexGenre from "./genres/IndexGenre";
import LandingPage from "./movies/LandingPage";

const routes = [
  {
    path: "/genres",
    component: IndexGenre,
  },
  { path: "/", component: LandingPage, exact: true },
];

export default routes;
