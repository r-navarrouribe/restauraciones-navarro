import "./App.scss";
import Header from "./Components/Header";
import Inicio from "./Components/Inicio";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Contacto from "./Components/Contacto";
import QuienesSomos from "./Components/QuienesSomos";
import Servicios from "./Components/Servicios";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        {/* Cabecera */}
        <Header />
        {/* Rutas para cada página */}
        <Routes>
          <Route exact path="/inicio" element={<Inicio />} />
          <Route exact path="/quienes-somos" element={<QuienesSomos />} />
          <Route exact path="/servicios" element={<Servicios />} />
          <Route exact path="/contacto" element={<Contacto />} />
          {/* Redirección a inicio */}
          <Route exact path="/" element={<Navigate to="/inicio" replace />} />
          <Route exact path="*" element={<Navigate to="/inicio" replace />} />
        </Routes>
        {/* Pie de página */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
