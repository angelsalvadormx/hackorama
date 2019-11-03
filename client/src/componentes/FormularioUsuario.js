import React from "react";

const FormularioUsuario = props => {
  console.log(props);
  const data = props.formValues;
  return (
    <form className="col-11 col-lg-6" onSubmit={props.onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          name="nombre"
          value={data.nombre}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Apellidos"
          name="apellidos"
          value={data.apellidos}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Correo"
          name="correo"
          value={data.correo}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          name="contrasena"
          value={data.contrasena}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Telefono"
          name="telefono"
          value={data.telefono}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block">{props.message}</button>
      </div>
    </form>
  );
};

export default FormularioUsuario;
