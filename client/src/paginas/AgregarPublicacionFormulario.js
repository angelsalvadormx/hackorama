import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import api from "../api";
import Cargador from "../componentes/Cargador";
import { geolocated } from "react-geolocated";

export default class AgregarPublicacionFormulario extends Component {
  state = {
    estado: 0,
    loading: false,
    error: null,
    form: {
      "lost_datetime": "",
      "pet":{
        "name":"",
        "color":"",
        "description":"",
        "images":[
          "https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2017/07/27/perrocallejero1_crop1501181636878.jpg_1555050301.jpg"
        ]
      },
      "postType":"",
      "location":{
        "lat": 19.246474,
        "lon": -103.715994
      }
    }
  }
  constructor(props) {
    super(props);
    this.state.estado = this.props.match.params.id;
  }

  enviar = async e => {
    e.preventDefault();
    this.state.form.postType = this.state.estado;
    this.setState({ loading: true, error: null });
    try {
      await api.create('post',this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/agregar-publicacion-menu");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }
  fecha = e => {
   this.state.form.lost_datetime = e.target.value;
  };
  nombre = e => {
    this.state.form.pet.name = e.target.value;
  };
  color = e => {
    this.state.form.pet.color = e.target.value;
  };
  descipcion = e => {
    this.state.form.pet.description = e.target.value;
  };

  render() {

    if (this.state.loading === true) {
      return <Cargador msg="Guardando Publicacion." />;
    }



    const tipo_form = this.state.estado == 1 ? 'Perdida' : this.state.estado == 2 ? 'Rescatada' : this.state.estado == 3 ? 'Sin hogar' : '';
    //<button type="button" className="w-45 p-4 shadow btn btn-light">Añadir Ubicación</button>
    return (
      <Fragment>
        <nav className="pl-4 pr-4 pt-4 d-flex justify-content-end">
          <Link to="/agregar-publicacion-menu" ><i className="text-dark fas fa-times"></i></Link>
        </nav>
        <header className="w-100 text-center pb-5 pt-1">
          <h3>Reportar mascota <br /> {tipo_form}</h3>
        </header>
        <form className="pb-5 d-flex flex-column pr-4 pl-4" onSubmit={this.enviar}>
          <input type="date" name="fecha" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Fecha" onChange={this.fecha} />
          <input type="text" name="nombre" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Nombre" onChange={this.nombre} />
          <input type="text" name="color" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Color" onChange={this.color} />
          <textarea required name="descipcion" className="border shadow p-3 mb-5 bg-white rounded" placeholder="Descipción" onChange={this.descipcion}></textarea>
          <footer className="mb-5 w-100 d-flex justify-content-around">
            <button type="button" className="w-45 p-4 shadow btn btn-light position-relative btn-file"><input type="file" className="position-absolute w-100 h-100" />Añadir Foto</button>
          </footer>
          <button type="submit" className="rounded-10 pt-2 pb-2 btn btn-primary">Enviar</button>
        </form>
      </Fragment>
    );
  };
};

