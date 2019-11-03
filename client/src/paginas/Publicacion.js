import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import api from "../api";
import Cargador from "../componentes/Cargador";
import Mapa from "../componentes/Mapa";

class Publicaciones extends Component {
  state = {
    loading: true,
    error: '',
    publicacion: {},
    datosMapa: []
  }
  constructor(props) {
    super(props);
    this.obtenerPublicacion(props.match.params.id);
  }

  async obtenerPublicacion(id_pub) {
    try {
      let respuesta = await api.getById('post', id_pub);
      if(Object.entries(respuesta).length === 0){
        this.props.history.push("/404");
      }
      this.state.publicacion = respuesta;
      this.state.datosMapa.push({
        id: respuesta.id,
        img: respuesta.pet.images[0],
        location: [
          respuesta.location.lat,
          respuesta.location.lon,
        ]
      })
      setTimeout(() => {
        this.setState({ loading: false });
      }, 500)
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {
    //this.props.match.params.id
    if (this.state.loading === true) {
      return <Cargador msg="Buscando publicación." />;
    }
    return (
      <Fragment>
        <nav className="pl-4 pr-4 pt-4 d-flex justify-content-end">
          <Link to="/publicaciones" ><i className="text-dark fas fa-times"></i></Link>
        </nav>
        <section className="container pb-5 d-flex justify-content-center flex-column">
          <header className="w-75 d-flex justify-content">
            <picture className="bkg-img d-block ht-100 rounded-10 w-40" style={{ backgroundImage: "url(" + this.state.publicacion.pet.images[0] + ")" }}></picture>
            <aside className="w-50 pl-3">
              <label className="h5 d-block mb-1"><strong>{this.state.publicacion.pet.name}</strong></label>
              <label className="h6 mb-2 d-block">{this.state.publicacion.pet.breed}</label>
              <label className="mb-0 d-block text-xsm">Se perdio</label>
              <label className="mb-0 text-xsm">{this.state.publicacion.lost_datetime}</label>
            </aside>
          </header>
          <main className="w-75 d-flex justify-content-around flex-column mt-4">
            <label className="d-block mb-2"><strong className=" mr-1">Color</strong> <small className="text-muted">{this.state.publicacion.pet.color}</small></label>
            <label className="d-block mb-2"><strong className=" mr-1">Genero</strong> <small className="text-muted">{this.state.publicacion.pet.gender}</small></label>
            <strong className=" mr-1 d-block">Descripción</strong>
            <label className="d-block mb-1"> <small className="text-muted">{this.state.publicacion.description}</small></label>
            <label className="d-block mb-1"> <small className="text-muted">{this.state.publicacion.pet.description}</small></label>
          </main>
          <strong className="mt-3 mb-3">Lugar de desaparición</strong>
          <section id="sec-mapa" className="mb-3">
            <Mapa datosMapa={this.state.datosMapa} />

          </section>
          <button className="btn btn-primary mt-4 absolute-bottom ">Reclamar</button>
        </section>
      </Fragment>
    );

  }
};

export default Publicaciones;