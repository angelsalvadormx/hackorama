import React, { Component } from "react";

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
      <div>
        <div className="d-flex flex-column align-items-center">
          <h5>Recuperar cuenta</h5>
        </div>

        <div className="row d-flex justify-content-center">
          <form className="col-11 col-lg-6" onSubmit={this.handleSubmit}>
            <div className="form-group">
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
    );
  }
}

export default RecuperarCuenta;
