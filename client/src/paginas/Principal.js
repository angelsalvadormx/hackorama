import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import EncabezadoPrincipal from "../componentes/EncabezadoPrincipal";

export default class Principal extends Component {
  render() {
    return (
      <Fragment>
        <div className="container h-100">
          <div className="row d-flex flex-column h-100">
            <EncabezadoPrincipal />
            <div className="d-flex align-items-end justify-content-center h-75">
              <div className="col-12 col-lg-6">
                <div className="form-group">
                  <Link
                    to="/inicio-sesion"
                    className="btn btn-primary btn-block"
                  >
                    Iniciar sesión
                  </Link>
                </div>
                <div className="form-group">
                  <Link to="/registro" className="btn btn-secondary btn-block">
                    Crear cuenta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
