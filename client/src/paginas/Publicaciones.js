import React,{Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// Import componentes
import Menu from "../componentes/Menu";
import Encabezado from "../componentes/Encabezado";
import Mapa from "../componentes/Mapa";

export default class Publicaciones extends Component{
  state = {
    loading: true,
    error: '',
    lista:[]
  }
  render(){
    const lista = this.state.lista.map((item, key) => (
      <Link to={"/publicacion/" + item.id} key={key} className="w-45 ht-100 mb-3 d-block">
        <section className="shadow-lg p-2 bg-white w-100 rounded-10 d-flex h-100">
          <picture
            className="d-block w-25 h-100 bkg-img rounded-10"
            style={{ backgroundImage: "url(" + item.imagen + ")" }}
          ></picture>
          <main className="w-50 pr-2 pl-2 text-dark">
            <label className="h5 d-block mb-1">
              <strong>{item.nombre}</strong>
            </label>
            <label className="h6 mb-2 d-block">{item.raza}</label>
            <label className="mb-2">{item.color}</label>
          </main>
          <aside className="w-25">
            <label className="text-sm text-dark">{item.fecha}</label>
          </aside>
        </section>
      </Link>
    ));
    return (
      <React.Fragment>
        <Encabezado />
        <main className="container pb-5 mb-5">
          <section id="sec-mapa" className="mb-3">
            <Mapa/>
          </section>
          <div className="w-100">{lista}</div>
        </main>
        <Menu />
      </React.Fragment>
    );
  }
};

