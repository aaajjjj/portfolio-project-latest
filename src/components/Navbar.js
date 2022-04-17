import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "../media/Profile.jpg";

export default function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <Link
            className="nav-link"
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="navbar-brand"
          >
            <img
              className="logo"
              alt="Responsive image"
              height="95"
              width="75"
              src={Profile}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffff" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  About me
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="job"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Job Experiences
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="research"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Research
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
}
