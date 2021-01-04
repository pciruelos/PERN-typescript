import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/" type="button" className="btn btn-info btn-lg">
            Playlist{" "}
          </Link>

          <Link to="/addsong" type="button" className="btn btn-danger btn-lg ">
            Add URL song
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
