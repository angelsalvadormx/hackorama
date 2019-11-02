import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

export default class AgregarPublicacionFormulario extends Component {
  render() {
    const estado = this.props.match.params.id;
    const tipo_form = estado == 1 ? 'Perdida' : estado == 2 ? 'Rescatado' : estado == 3 ? 'Sin hogar' : '';
    return (
      <Fragment>
        <nav className="pl-4 pr-4 pt-4 d-flex justify-content-end">
          <Link to="/agregar-publicacion-menu" ><i className="text-dark fas fa-times"></i></Link>
        </nav>
        <header className="w-100 text-center pb-5 pt-1">
          <h3>Reportar mascota <br /> {tipo_form}</h3>
        </header>
        <form className="pb-5 d-flex flex-column pr-4 pl-4">
          <input type="date" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Fecha" />
          <input type="text" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Nombre" />
          <input type="text" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Color" />
          <textarea required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Descipción"></textarea>
          <footer className="mb-5 w-100 d-flex justify-content-around">
            <button type="button" className="w-45 p-4 shadow btn btn-light">Añadir Ubicación</button>
            <button type="button" className="w-45 p-4 shadow btn btn-light position-relative btn-file"><input type="file" className="position-absolute w-100 h-100" />Añadir Foto</button>
          </footer>
          <button type="submit" className="rounded-10 pt-2 pb-2 btn btn-primary">Enviar</button>
        </form>
      </Fragment>
    );
  };
};

