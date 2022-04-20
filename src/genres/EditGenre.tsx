import React from "react";
import { useParams } from "react-router-dom";

export default function EditGenre() {
  const { id }: any = useParams();
  return (
    <>
      <div>EditGenre</div>
      <p>The route param is {id}</p>
    </>
  );
}
