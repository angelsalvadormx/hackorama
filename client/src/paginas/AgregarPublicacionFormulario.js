import React, { Fragment, Component } from 'react';

export default class AgregarPublicacionFormulario extends Component {
  render() {
    const estado = this.props.match.params.id;
    const tipo_form = estado == 1 ? 'Perdida' : estado == 2 ? 'Rescatado' : estado == 3 ? 'Sin hogar' : '';
    return (
      <Fragment>
        <h3 className="w-100">Reportar mascota <br /> {tipo_form}</h3>

      </Fragment>
    );
  };
};

