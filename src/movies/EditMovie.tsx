import React from "react";
import MovieForm from "./MovieForm";

export default function EditMovie() {
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
      />
    </>
  );
}
