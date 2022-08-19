import React from 'react'
import { NavLink } from "react-router-dom";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar-wrapper">

      <div className="navbar-inverse" role="navigation">
        <div className="container">
          <div className="navbar-header">


            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

          </div>

          <div className="navbar-collapse  collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/signin">Sign In</NavLink></li>
              <li><NavLink to="/signup">Sign Up</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar