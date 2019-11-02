import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exac path="/" component={Principal} />
        <Route exac path="/inicio-sesion" component={InicioSesion} />
        <Route exac path="/recuperar-cuenta" component={RecuperarCuenta} />
        <Route exac path="/registro" component={Registro} />
        <Route exac path="/inicio" component={Inicio} />
        <Route exac path="/comparacion" component={ComparacionMascotas} />
        <Route exac path="/publicaciones" component={Publicaciones} />
        <Route exac path="/publicacion/:id" component={Publicacion} />
        <Route exac path="/agregar-publicacion" component={AgregarPublicacionMenu} />
        <Route exac path="/agregar-publicacion/:id" component={AgregarPublicacionFormulario} />
        <Route exac path="/perfil/:id" component={Perfil} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
