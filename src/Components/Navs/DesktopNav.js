import { NavLink } from "react-router-dom";

export default function DesktopNav() {
  return (
    <div className="navegador-desktop col-8">
      <ul className={`row justify-content-around`}>
        <li className="col-3 d-flex justify-content-center align-items-center">
          <NavLink
            to="/inicio"
            className={(navData) => (navData.isActive ? "actual" : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li className="col-3 d-flex justify-content-center align-items-center">
          <NavLink
            to="/quienes-somos"
            className={(navData) => (navData.isActive ? "actual" : "")}
          >
            Quienes Somos
          </NavLink>
        </li>
        <li className="col-3 d-flex justify-content-center align-items-center">
          <NavLink
            to="/servicios"
            className={(navData) => (navData.isActive ? "actual" : "")}
          >
            Servicios
          </NavLink>
        </li>
        <li className="col-3 d-flex justify-content-center align-items-center">
          <NavLink
            to="/contacto"
            className={(navData) => (navData.isActive ? "actual" : "")}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
