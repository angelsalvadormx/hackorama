import React from "react";
import { Link } from 'react-router-dom';
import './noEncontrado/404.css';
import dog from './noEncontrado/404.gif'
function NoEncontrada() {
  return (
    <main id="noEncontrado" className="position-relative w-100 h-100 bkg-img" style={{ backgroundImage: `url(${dog})` }}>
       <nav className="pl-4 pr-4 pt-4 d-flex justify-content-end">
        <Link to="/publicaciones" ><i className="text-dark fas fa-times"></i></Link>
      </nav>
      <section className="msg404 text-center position-absolute w-100">
        <h2 className="w-100 text-center">404</h2>
        <small>Página no encontrada.</small>
      </section>
    </main>
  );
}
export default NoEncontrada;
