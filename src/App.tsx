import React, { useEffect, useState } from "react";
import MovieList from "./movies/MovieList";
import { movieLandingPage } from "./movies/movies.model";
import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexGenre from "./genres/IndexGenre";
function Index() {
  return <h1>Index</h1>;
}

function Abc() {
  return <h1>Abc</h1>;
}

function Bcd() {
  return <h1>Bcd</h1>;
}
function App() {
  const [movies, SetMovies] = useState<movieLandingPage>({});

  useEffect(() => {
    const timeOut = setTimeout(() => {
      SetMovies({
        movies: [
          {
            id: 1,
            title: "Spider Man far from home",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
          },
          {
            id: 2,
            title: "Dasvi",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Dasvi.jpg/220px-Dasvi.jpg",
          },
        ],
        upcoming: [
          {
            id: 3,
            title: "The In Between",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/The_In_Between_poster.jpeg/220px-The_In_Between_poster.jpeg",
          },
        ],
      });
    }, 2000);

    return () => clearTimeout(timeOut);
  });

  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <h3>In theaters</h3>
            <MovieList movies={movies.movies} />
            <h3>Upcoming Release</h3>
            <MovieList movies={movies.upcoming} />
          </Route>
          <Route path='/genres'>
            <IndexGenre />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
