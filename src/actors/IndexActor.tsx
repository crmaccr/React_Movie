import React from "react";
import { Link } from "react-router-dom";

export default function IndexActor() {
  return (
    <>
      <h3>Actors</h3>
      <Link to='/actors/create' className='btn btn-primary'>
        Create Actor
      </Link>
    </>
  );
}
