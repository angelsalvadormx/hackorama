import React, { Component } from "react";
import "./cargador/cargador.css";
import loader from './cargador/loader.gif';

const Cargador = ()=>{
  return(
    <section id="cargador" className="position-absolute w-100 h-100 bkg-img" style={{ backgroundImage: `url(${loader})` }}>
      <h2 id="msgCargador" className="position-absolute w-100 text-center">Preparando todo.</h2>
    </section>
  );
};
export default Cargador;