import React from "react";
import GenreForm from "./GenreForm";

export default function CreateGenre() {
  return (
    <>
      <h2>CreateGenre</h2>
      <GenreForm
        model={{ name: "" }}
        onSubmit={async (values) => {
          //   When the form is posted
          await new Promise((r) => setTimeout(r, 1000));
          console.log(values);
        }}
      />
    </>
  );
}
