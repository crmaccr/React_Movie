import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActor from "./actors/IndexActor";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenre from "./genres/IndexGenre";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovie from "./movies/FilterMovie";
import LandingPage from "./movies/LandingPage";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import IndexMovieTheater from "./movietheaters/IndexMovieTheater";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
  { path: "/genres", component: IndexGenre, exact: true },
  { path: "/genres/create", component: CreateGenre },
  { path: "/genres/edit/:id(\\d+)", component: EditGenre },

  { path: "/actors", component: IndexActor, exact: true },
  { path: "/actors/create", component: CreateActor },
  { path: "/actors/edit/:id(\\d+)", component: EditActor },

  { path: "/movietheaters", component: IndexMovieTheater, exact: true },
  { path: "/movietheaters/create", component: CreateMovieTheater },
  { path: "/movietheaters/edit/:id(\\d+)", component: EditMovieTheater },

  { path: "/movies/create", component: CreateMovie },
  { path: "/movies/filter", component: FilterMovie },
  { path: "/movies/edit/:id(\\d+)", component: EditMovie },

  { path: "/", component: LandingPage, exact: true },
  { path: "*", component: RedirectToLandingPage },
];

export default routes;
