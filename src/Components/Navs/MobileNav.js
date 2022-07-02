import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function MobileNav({ burgerMenu }) {
  return (
    <nav className={`row mobile-nav ${burgerMenu ? "mobile-nav-on" : ""}`}>
      <div className="col-12">
        <ul className="row align-items-center flex-column text-center">
          <button className="btn col-12 d-flex justify-content-center align-items-center mobile-nav-link">
            <NavLink
              to="/inicio"
              className={`mobile-nav-button ${(navData) =>
                navData.isActive ? "actual" : ""}`}
            >
              Inicio
            </NavLink>
          </button>
          <button className="btn col-12 d-flex justify-content-center align-items-center mobile-nav-link">
            <NavLink
              to="/quienes-somos"
              className={`mobile-nav-button ${(navData) =>
                navData.isActive ? "actual" : ""}`}
            >
              Quienes Somos
            </NavLink>
          </button>
          <button className="btn col-12 d-flex justify-content-center align-items-center mobile-nav-link">
            <NavLink
              to="/servicios"
              className={`mobile-nav-button ${(navData) =>
                navData.isActive ? "actual" : ""}`}
            >
              Servicios
            </NavLink>
          </button>
          <button className="btn col-12 d-flex justify-content-center align-items-center mobile-nav-link">
            <NavLink
              to="/contacto"
              className={`mobile-nav-button ${(navData) =>
                navData.isActive ? "actual" : ""}`}
            >
              Contacto
            </NavLink>
          </button>
        </ul>
      </div>
    </nav>
  );
}

MobileNav.propTypes = {
  burgerMenu: PropTypes.bool.isRequired,
};
