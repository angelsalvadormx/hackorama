import React, { Fragment, Component } from 'react';

export default class AgregarPublicacionFormulario extends Component {
  render() {
    const estado = this.props.match.params.id;
    const tipo_form = estado == 1 ? 'Perdida' : estado == 2 ? 'Rescatado' : estado == 3 ? 'Sin hogar' : '';
    return (
      <Fragment>
          <header className="position-fixed w-100 text-center pt-5 pb-5">
            <h3>Reportar mascota <br /> {tipo_form}</h3>
          </header>
          <form className="h-100 d-flex justify-content-center flex-column w-75 margin_center">
            <input type="date" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Fecha" />
            <input type="text" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Nombre" />
            <input type="text" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Color" />
            <textarea required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Descipción"></textarea>
            <footer>
              <button type="button" className="p-4 shadow btn btn-light">Añadir Ubicación</button>
              <input type="file" className="p-4 shadow btn btn-light"/>
            </footer>
          </form>
      </Fragment>
    );
  };
};

