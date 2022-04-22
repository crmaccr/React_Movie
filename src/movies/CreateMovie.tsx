import React from "react";
import { genreDTO } from "../genres/genres.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {
  const nonSelectedGenres: genreDTO[] = [
    { id: 1, name: "Comedy" },
    { id: 2, name: "Drama" },
  ];
  return (
    <>
      <h2>CreateMovie</h2>
      <MovieForm
        model={{ title: "", inTheaters: false, trailer: "" }}
        onSubmit={(values) => console.log(values)}
        selectedGenres={[]}
        nonSelectedGenres={nonSelectedGenres}
      />
    </>
  );
}
