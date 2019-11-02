import React from 'react';

const Titulo = ({titulo,descripcion})=>{
  descripcion = descripcion == undefined ? '' : descripcion;
  return(
    <h3>
      {titulo}<br/>
      <small class="text-muted">{descripcion}</small>
    </h3>
  );
};
export default Titulo;