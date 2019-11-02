import React from 'react';

const Titulo = ({titulo,descripcion})=>{
  descripcion = descripcion == undefined ? '' : descripcion;
  return(
    <h3 className="text-center">
      {titulo}<br/>
      <small className="text-muted">{descripcion}</small>
    </h3>
  );
};
export default Titulo;