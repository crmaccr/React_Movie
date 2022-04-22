import React from "react";
import MovieTheaterForm from "./MovieTheaterForm";

//1. create DTO .d.ts
//. MovieForm

export default function CreateMovieTheater() {
  return (
    <div>
      Create Movie Theater
      <MovieTheaterForm
        onSubmit={(values) => console.log(values)}
        model={{ name: "" }}
      />
    </div>
  );
}
