import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import GenreForm from "./GenreForm";

const formSchema = Yup.object().shape({
  genre: Yup.string().required("genre is required"),
});
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
