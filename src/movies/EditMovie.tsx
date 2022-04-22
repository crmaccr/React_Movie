import React from "react";
import { actorMovieDTO } from "../actors/actor.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
  const nonSelectedGenres: genreDTO[] = [{ id: 2, name: "Drama" }];
  const selectedGenres: genreDTO[] = [{ id: 1, name: "Comedy" }];

  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: "Labim" },
  ];
  const selectedMovieTheaters: movieTheaterDTO[] = [
    { id: 2, name: "Gopi Krishna" },
  ];
  const selectedActors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Tom Holland",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg",
      character: "Tommy",
    },
  ];
  return (
    <>
      <h3>EditMovie</h3>
      <MovieForm
        model={{
          title: "First movie",
          inTheaters: true,
          trailer: "url",
          releaseDate: new Date("2022-04-22T00:00:00"),
          posterURL:
            "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/K.G.F_Chapter_1_poster.jpg/220px-K.G.F_Chapter_1_poster.jpg",
        }}
        onSubmit={(values) => console.log(values)}
        selectedGenres={selectedGenres}
        nonSelectedGenres={nonSelectedGenres}
        selectedMovieTheaters={selectedMovieTheaters}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedActors={selectedActors}
      />
    </>
  );
}
