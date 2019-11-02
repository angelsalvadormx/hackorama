import React, { Component } from "react";
import Gravatar from "../componentes/Gravatar";

class Perfil extends Component {
  state = {
    laoding: true,
    error: null,
    data: {
      nombre: "Jorge",
      apellidos: "Vargas",
      correo: "correo@correo",
      telefono: "312333",
      contrasena: "1235"
    }
  };

  fetchData = async () => {
    this.setState({ laoding: true, error: null });

    /* try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ laoding: false, data: data });
    } catch (error) {
      this.setState({ laoding: false, error: error });
    } */
  };

  handleChange = e => {
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

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const data = this.state.data;
    return (
      <div>
        <div className="d-flex flex-column align-items-center">
          <h5 className="mb-5">Perfil</h5>
          <Gravatar correo={data.correo} />
          <form className="col-11 col-lg-6" onSubmit={this.handleSubmit}>
            <div className="form-group mt-5">
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={data.nombre}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="apellidos"
                value={data.apellidos}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="correo"
                value={data.correo}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="contrasena"
                value={data.contrasena}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <button
                onClick={this.handleClick}
                className="btn btn-secondary btn-block"
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Perfil;
