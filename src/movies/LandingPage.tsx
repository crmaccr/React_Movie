import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { movieLandingPage } from "./movies.model";

export default function LandingPage() {
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
    <div>
      <h3>In theaters</h3>
      <MovieList movies={movies.movies} />
      <h3>Upcoming Release</h3>
      <MovieList movies={movies.upcoming} />
    </div>
  );
}
