import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Nav.css";
import logo from "../Pics/logo.webp";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showHomePage, setShowHomePage] = useState(true); // Lancer directement la page d'accueil
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleShowLinks = () => setShowLinks((prev) => !prev);

  const handleNavClick = (path) => {
    setShowLinks(false);
    setActiveLink(path);
    navigate(path);
  };

  return (
    <>
      {/* La section avec le nom de la compagnie est supprimée */}
      <div className={`home-page ${showHomePage ? "fade-in" : ""}`}></div>
      <nav
        className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}
        role="navigation"
      >
        <div
          className="navbar-logo"
          onClick={() => handleNavClick("/")}
          aria-label="Navigate to Home"
        >
          <Link to="/">
            <img
              src={logo}
              alt="Logo Wanubida"
              width="500px"
              height="500px"
              loading="eager"
            />
          </Link>
        </div>
        <ul className="navbar-links">
          {[
            { path: "/", label: "Accueil", className: "slide-in-down-1" },
            {
              path: "/spectacle",
              label: "Spectacle",
              className: "slide-in-down-2",
            },
            {
              path: "/mediation",
              label: "Médiation",
              className: "slide-in-down-3",
            },
            {
              path: "/ecouter/voir",
              label: "Ecouter/Voir",
              className: "slide-in-down-4",
            },
            { path: "/cie", label: "La Cie", className: "slide-in-down-5" },
            {
              path: "/contacts",
              label: "Contacts",
              className: "slide-in-down-6",
            },
            // { path: "/agenda", label: "Agenda", className: "slide-in-down-7" },
            // {
            //   path: "/billetterie",
            //   label: "Billetterie",
            //   className: "slide-in-down-8",
            // },
          ].map(({ path, label, className }, index) => (
            <li
              key={index}
              className={`navbar-item ${className} ${
                activeLink === path ? "active" : ""
              }`}
            >
              <Link
                className="navbar-link"
                to={path}
                onClick={() => handleNavClick(path)}
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="navbar-burger"
          onClick={handleShowLinks}
          aria-label="Toggle navigation"
        >
          <span className="burger-bar"></span>
        </button>
      </nav>
    </>
  );
};

export default Nav;
