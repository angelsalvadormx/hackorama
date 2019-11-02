import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Principal extends Component {
  render() {
    return (
      <div>
        <div className="container h-100 bg-dark">
          <div>logo</div>
          <h1 className="d-flex justify-content-center">Nombre App</h1>
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <Link
                  to="/inicio-sesion"
                  className="btn btn-secondary btn-block"
                >
                  Iniciar Sesion
                </Link>
              </div>
              <div className="form-group">
                <Link to="/registro" className="btn btn-secondary btn-block">
                  Crear Cuenta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
