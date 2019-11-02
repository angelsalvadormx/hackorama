import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Principal extends Component {
  render() {
    return (
      <div>
        <div className="container h-100 bg-dar">
          <div className="d-flex flex-column align-items-center">
            <h1>Logo</h1>
            <h3>Nombre App</h3>
          </div>
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
