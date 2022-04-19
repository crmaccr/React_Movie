import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          React movies
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/genres' className='nav-link active'>
                genres
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
