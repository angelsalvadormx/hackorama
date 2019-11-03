import React from "react";
import { Redirect } from "react-router-dom";
import Contexto from "../Contexto";

const Inicio = () => {
  return (
    <Contexto.Consumer>
      {({ autenticado }) =>
        autenticado ? <h1>Hola</h1> : <Redirect to="/inicio-sesion" />
      }
    </Contexto.Consumer>
  );
};

export default Inicio;
