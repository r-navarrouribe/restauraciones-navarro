export default function Footer() {
  return (
    <footer className="row text-center justify-content-center text-light">
      <div className="col-12 bg-dark p-2 text-secondary">
        <ul className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-4">
            <ul className="row">
              <li className="col-12">
                <a
                  className="text-secondary"
                  href="mailto:info@restauracionesnavarro.com"
                >
                  📧 info@restauracionesnavarro.com
                </a>
              </li>
              <li className="col-12">
                <a className="text-secondary" href="tel:934376970">
                  📞 93 437 69 70
                </a>
              </li>
            </ul>
          </div>
          <li className="col-12 col-lg-4">
            Avinguda de Can Serra, 88-C, Sótano 1, 08906 L'Hospitalet de
            Llobregat, Barcelona
          </li>
        </ul>
      </div>
      <span className="col-12 p-2">Restauraciones Navarro &copy; 2022</span>
    </footer>
  );
}
