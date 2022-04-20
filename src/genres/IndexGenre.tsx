import React from "react";
import { Link } from "react-router-dom";

export default function IndexGenre() {
  return (
    <>
      <h3>Genres</h3>
      <Link to='/genres/create' className='btn btn-primary'>
        Create Genre
      </Link>
    </>
  );
}
