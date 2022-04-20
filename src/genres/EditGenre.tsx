import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import CreateGenre from "./CreateGenre";
import GenreForm from "./GenreForm";

const formSchema = Yup.object().shape({
  genre: Yup.string().required("genre is required"),
});
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
