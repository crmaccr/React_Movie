import React from "react";
import MovieForm from "./MovieForm";

export default function CreateMovie() {
  return (
    <>
      <h2>CreateMovie</h2>
      <MovieForm
        model={{ title: "", inTheaters: false, trailer: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
