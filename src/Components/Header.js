import DesktopNav from "./Navs/DesktopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MobileNav from "./Navs/MobileNav";

export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const burgerMenuHandler = () => {
    setBurgerMenu(!burgerMenu);
  };

  const [topPosition, setTopPosition] = useState(0);

  const handleScroll = () => {
    setTopPosition(window.pageYOffset);
    window.removeEventListener("scroll", handleScroll);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <header className={`row text-light`}>
        <nav className="menu-nav col-12 p-2">
          <div className="row justify-content-center align-items-center">
            <div className="col-2 d-flex justify-content-center">
              <img
                className="rounded"
                height="60"
                width="60"
                src="favicon.jpg"
                alt="Logo de Restauraciones Navarro"
              />
            </div>
            <DesktopNav />
            <div className="col-6 burger-box">
              <button
                type="button"
                className="btn btn-secondary burger-button"
                onClick={burgerMenuHandler}
              >
                <FontAwesomeIcon icon={burgerMenu ? faTimes : faBars} />
              </button>
            </div>
          </div>
        </nav>
        <div className="col-12 title-container position-absolute">
          <div className="row">
            <h1
              className={`titulo-header text-center pt-1 pb-1 ${
                topPosition > 50 || burgerMenu
                  ? `titulo-escondido`
                  : "bg-dark col-12"
              }`}
            >
              Restauraciones Navarro
            </h1>
            <MobileNav burgerMenu={burgerMenu} />
          </div>
        </div>
      </header>
    </>
  );
}
