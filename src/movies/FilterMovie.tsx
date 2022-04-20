import { Field, Form, Formik } from "formik";
import React from "react";
import { genreDTO } from "../genres/genres.model";
import Button from "../utils/Button";

export default function FilterMovie() {
  const initialValues: FilterMoviesForm = {
    title: "",
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false,
  };
  const genres: genreDTO[] = [
    {
      id: 1,
      name: "Comedy",
    },
    {
      id: 2,
      name: "Romance",
    },
  ];
  return (
    <>
      <h3>Filter movies</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps) => (
          <Form>
            <div className='row gx-3 align-items-center'>
              <div className='col-auto'>
                <input
                  type='text'
                  className='form-control'
                  id='title'
                  placeholder='Title of the movie'
                  {...formikProps.getFieldProps("title")}
                />
              </div>
              <div className='col-auto'>
                <select
                  className='form-select'
                  {...formikProps.getFieldProps("genreId")}
                >
                  <option value='0'>---choose a genre ----</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col-auto'>
                <div className='form-check'>
                  <Field
                    className='form-check-input'
                    id='upcomingReleases'
                    name='upcomingReleases'
                    type='checkbox'
                  />
                  <label
                    className='form-check-label'
                    htmlFor='upcomingReleases'
                  >
                    Upcoming Releases
                  </label>
                </div>
              </div>
              <div className='col-auto'>
                <div className='form-check'>
                  <Field
                    className='form-check-input'
                    id='inTheaters'
                    name='inTheaters'
                    type='checkbox'
                  />
                  <label className='form-check-label' htmlFor='inTheaters'>
                    In Theaters
                  </label>
                </div>
              </div>
              <div className='col-auto'>
                <Button
                  className='btn btn-primary'
                  onClick={() => formikProps.submitForm()}
                >
                  Filter
                </Button>
                <Button
                  className='btn btn-danger ms-3'
                  onClick={() => formikProps.setValues(initialValues)}
                >
                  Reset
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface FilterMoviesForm {
  title: string;
  genreId: number;
  upcomingReleases: boolean;
  inTheaters: boolean;
}
