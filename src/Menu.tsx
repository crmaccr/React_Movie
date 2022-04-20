import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand'>
          React movies
        </NavLink>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to='/genres' className='nav-link'>
                genres
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/actors' className='nav-link'>
                Actors
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/movies/filter' className='nav-link'>
                Filter movies
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/actors' className='nav-link'>
                Actors
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/movietheaters' className='nav-link'>
                Movie Theaters
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/movies/create' className='nav-link'>
                Create a movie
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
