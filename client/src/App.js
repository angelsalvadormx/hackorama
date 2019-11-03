import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//  import Paginas
import Principal from "./paginas/Principal";
import InicioSesion from "./paginas/InicioSesion";
import RecuperarCuenta from "./paginas/RecuperarCuenta";
import Registro from "./paginas/Registro";
import Inicio from "./paginas/Inicio";
import ComparacionMascotas from "./paginas/ComparacionMascotas";
import Publicaciones from "./paginas/Publicaciones";
import Publicacion from "./paginas/Publicacion";
import AgregarPublicacionMenu from "./paginas/AgregarPublicacionMenu";
import AgregarPublicacionFormulario from "./paginas/AgregarPublicacionFormulario";
import Perfil from "./paginas/Perfil";
import NoEncontrada from "./paginas/NoEncontrada";
import Mapa from './componentes/Mapa';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exac path="/mapa" component={Mapa} />
        <Route exac path="/index" component={Principal} />
        <Route exac path="/inicio-sesion" component={InicioSesion} />
        <Route exac path="/recuperar-cuenta" component={RecuperarCuenta} />
        <Route exac path="/registro" component={Registro} />
        <Route exac path="/inicio" component={Inicio} />
        <Route exac path="/comparacion" component={ComparacionMascotas} />
        <Route exac path="/publicaciones" component={Publicaciones} />
        <Route exac path="/publicacion/:id" component={Publicacion} />
        <Route
          exac
          path="/agregar-publicacion/:id"
          component={AgregarPublicacionFormulario}
        />
        <Route
          exac
          path="/agregar-publicacion-menu"
          component={AgregarPublicacionMenu}
        />
        <Route exac path="/perfil/:id" component={Perfil} />
        <Route component={NoEncontrada} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
