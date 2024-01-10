import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/image/logo.jpg";

function NavBar() {
  // Difine the state for the active links
  const [activeLink, setactiveLink] = useState("home");
  // Difine the state for the scroll position
  const [scrolled, setScrolled] = useState(false);
  // UseEffect to set Scrolled to true when the user scrolls down
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // when scrolling, set the state of the scrolled variable
    window.addEventListener("scroll", onScroll);
    return () => {
      // when the component is unmounted, remove the event listener
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // Update the active link when the user clicks on a link
  const onUpdateActiveLink = (value) => {
    setactiveLink(value);
  };
  // And return the NavBar component with JSX
  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="logo"
              src={logo}
              width="70" // Adjust width as needed
              height="70" // Adjust height as needed
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className="border-light text-light"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("hero")}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </NavLink>
              <NavLink
                to="/gallery"
                className={
                  activeLink === "gallery"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("gallery")}
              >
                Gallery
              </NavLink>
            </Nav>
            <span className="navbar-text">
              <span className="social-icons">
                {/* Github */}
                <a href="https://x.com/_dilorex?t=9uqcgiBq5lU9s_M-IekABQ&s=08">
                  <i class="bi bi-github"></i>
                </a>
                {/* LinkedIn */}
                <a href="mgraquza@gmail.com">
                  <i class="bi bi-linkedin"></i>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/_dilorex?igsh=MTJhYmNtZmFqbHd2dw==">
                  <i class="bi bi-instagram"></i>
                </a>
              </span>
              <button
                className="vvd"
                onClick={() => {
                  console.log("is Clicked .");
                }}
              >
                Let's Connect
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
