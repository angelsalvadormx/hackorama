import React from "react";
import './noEncontrado/404.css';
import dog from './noEncontrado/404.gif'
function NoEncontrada() {
  return (
    <main id="noEncontrado" className="position-relative w-100 h-100 bkg-img" style={{ backgroundImage: `url(${dog})` }}>
      <section className="msg404 text-center position-absolute w-100">
        <h2 className="w-100 text-center">404</h2>
        <small>Página no encontrada.</small>
      </section>
    </main>
  );
}
export default NoEncontrada;
