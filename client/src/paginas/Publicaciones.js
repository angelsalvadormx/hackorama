import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";

// Import componentes
import Menu from "../componentes/Menu";
import Encabezado from "../componentes/Encabezado";
import Mapa from "../componentes/Mapa";
import Cargador from "../componentes/Cargador";

export default class Publicaciones extends Component {
  state = {
    loading: true,
    error: '',
    lista: [],
    datosMapa:[]
  }
  constructor() {
    super();
    this.obtenerPublicaciones();
  }

  async obtenerPublicaciones() {
    try {
      let respuesta = await api.list('post');
      this.state.lista = respuesta;
      let tmpDatosMapa = []
      respuesta.forEach(item => {
        tmpDatosMapa.push({
          id: item.id,
          img: item.pet.images[0],
          location: [
            item.location.lat,
            item.location.lon,
          ]
        })
      });
      this.state.datosMapa = tmpDatosMapa 
      
      setTimeout(()=>{
        this.setState({ loading: false });
      },500)
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  
  render() {
    if (this.state.loading === true) {
      return <Cargador msg="Preparando todo." />;
    }
    return (
      <React.Fragment>
        <Encabezado />
        <main className="container pb-5 mb-5">
          <section id="sec-mapa" className="mb-3">
            <Mapa datosMapa={this.state.datosMapa}/>
          </section>
          <div className="w-100">
            {this.state.lista.map((item,key) => (
              <Link to={"/publicacion/" + item.id} key={key} className="w-45 ht-100 mb-3 d-block">
              <section className="shadow-lg p-2 bg-white w-100 rounded-10 d-flex h-100">
                <picture
                  className="d-block w-25 h-100 bkg-img rounded-10"
                  style={{ backgroundImage: "url(" + item.pet.images[0] + ")" }}
                ></picture>
                <main className="w-50 pr-2 pl-2 text-dark">
                  <label className="h5 d-block mb-1">
                    <strong>{item.pet.name}</strong>
                  </label>
                  <label className="text-sm mb-0 d-block">{item.pet.breed}</label>
                  <label className="text-xsm mb-2">{item.pet.color}</label>
                </main>
                <aside className="w-25">
                  <label className="text-sm text-dark">{item.lost_datetime}</label>
                </aside>
              </section>
            </Link>
            ))}
          </div>
        </main>
        <Menu />
      </React.Fragment>
    );
  }
};

