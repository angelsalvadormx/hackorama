import React from "react";
import "./cargador/cargador.css";
import loader from "./cargador/loader.gif";

const Cargador = ({msg}) => {
  msg = msg == undefined ? '' : msg;
  return (
    <section
      id="cargador"
      className="position-fixed w-100 h-100 bkg-img zIndex3"
      style={{ backgroundImage: `url(${loader})` }}
    >
      <h2 id="msgCargador" className="position-absolute w-100 text-center">
        {msg}
      </h2>
    </section>
  );
};
export default Cargador;
