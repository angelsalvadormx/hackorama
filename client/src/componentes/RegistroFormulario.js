import React, { Component } from "react";

class RegistroFormulario extends Component {
  state = {};

  handleClick = e => {
    console.log("Button was clicked");
  };

  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="form-group">
          <button
            onClick={this.handleClick}
            className="btn btn-primary btn-block"
          >
            Registrarse
          </button>
        </div>
      </div>
    );
  }
}

export default RegistroFormulario;
