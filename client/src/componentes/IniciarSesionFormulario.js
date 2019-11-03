import React from "react";
import { Link } from "react-router-dom";

const IniciarSesionFormulario = props => {
  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h5 className="mt-5">Inicio de sesión</h5>
      <form className="col-11 col-lg-6" onSubmit={props.onSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="correo"
            placeholder="Ingresa correo"
            onChange={props.onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="contrasena"
            placeholder="Ingresa contraseña"
            onChange={props.onChange}
            required
          />
        </div>
        <div className="form-group d-flex flex-column align-items-end">
          <Link to="/recuperar-cuenta">Recuperar cuenta</Link>
        </div>
        <div className="form-group">
          <button className="rounded-10 btn btn-primary btn-block">
            Iniciar
          </button>
        </div>
      </form>
    </div>
  );
};

export default IniciarSesionFormulario;
