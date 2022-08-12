import React from 'react'
import { Link } from "react-router-dom";

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
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar