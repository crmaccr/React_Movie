import React from "react";
import { useParams } from "react-router-dom";
import GenreForm from "./GenreForm";


export default function EditGenre() {
  const { id }: any = useParams();
  return (
    <>
      <h2>Edit Genre</h2>
      <GenreForm
        model={{ name: "some initial values" }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1));
          console.log(values);
          console.log(id);
        }}
      />
    </>
  );
}
