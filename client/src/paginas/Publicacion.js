import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Publicaciones extends Component {
  render() {
    const publicacion = {
      "id": 8,
      "fecha": "23 oct 2019",
      "nombre": "Nombre",
      "raza": "Raza",
      "color": "Color",
      "genero":"Hombre",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet libero sed dui interdum accumsan. Vestibulum id dapibus quam, sed semper dolor. Curabitur urna sem, laoreet lacinia velit vitae, congue bibendum mauris. Nulla facilisi.",
      "imagen": "https://i2.wp.com/www.silocreativo.com/wp-content/uploads/2017/12/visual-code-portada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
    }
    //this.props.match.params.id
    return (
      <Fragment>
        <nav className="pl-4 pr-4 pt-4 d-flex justify-content-end">
          <Link to="/publicaciones" ><i className="text-dark fas fa-times"></i></Link>
        </nav>
        <section className="container pb-5 d-flex justify-content-center flex-column">
          <header className="w-75 d-flex justify-content">
            <picture className="bkg-img d-block ht-100 rounded-10 w-40" style={{ backgroundImage: "url(" + publicacion.imagen + ")" }}></picture>
            <aside className="w-50 pl-3">
              <label className="h5 d-block mb-1"><strong>{publicacion.nombre}</strong></label>
              <label className="h6 mb-2 d-block">{publicacion.raza}</label>
              <label className="mb-0 d-block text-xsm">Se perdio</label>
              <label className="mb-0 text-xsm">{publicacion.fecha}</label>
            </aside>
          </header>
          <main className="w-75 d-flex justify-content-around flex-column mt-4">
            <label className="d-block mb-2"><strong className=" mr-1">Color</strong> <small className="text-muted">{publicacion.color}</small></label>
            <label className="d-block mb-2"><strong className=" mr-1">Genero</strong> <small className="text-muted">{publicacion.genero}</small></label>
            <strong className=" mr-1 d-block">Descripción</strong>
            <label className="d-block mb-1"> <small className="text-muted">{publicacion.descripcion}</small></label>
          </main>

          <button className="btn btn-primary mt-4 absolute-bottom ">Reclamar</button>
        </section>
      </Fragment>
    );

  }
};

export default Publicaciones;