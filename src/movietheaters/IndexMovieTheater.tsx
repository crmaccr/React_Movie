import React from "react";
import { Link } from "react-router-dom";

export default function IndexMovieTheater() {
  return (
    <>
      <div>MovieTheaterIndex</div>
      <Link to='/movietheaters/create' className='btn btn-primary'>
        Create Movie Theater
      </Link>
    </>
  );
}
