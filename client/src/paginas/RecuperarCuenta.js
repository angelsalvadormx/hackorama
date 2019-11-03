import React, { Component } from "react";
import EncabezadoPrincipal from "../componentes/EncabezadoPrincipal";

class RecuperarCuenta extends Component {
  state = {
    form: {
      correo: ""
    }
  };

  handleChange = e => {
    /*  const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value; */

    this.setState({
      /*   form: nextForm */
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.form);
  };

  render() {
    return (
      <div className="container h-100">
        <div className="row h-100 d-flex flex-column">
          <EncabezadoPrincipal />

          <div className="d-flex flex-column align-items-center mt-5">
            <h5>Recuperar cuenta</h5>
            <form className="col-11 col-lg-6" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="form-group">
                  <label>
                    Te enviaremos un enlace a tu correo para que puedas cambiar
                    la contraseña
                  </label>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="correo"
                  placeholder="Ingresa correo"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <button
                  onClick={this.handleClick}
                  className="btn btn-secondary btn-block"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RecuperarCuenta;
