import React from "react";
import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <div>
      <h3> MovieTheaterEdit</h3>
      <MovieTheaterForm
        onSubmit={(values) => console.log(values)}
        model={{
          name: "Sambil",
          latitude: 27.709632821255607,
          longitude: 85.30343055725099,
        }}
      />
    </div>
  );
}
