import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

//Test
import Cargador from "./componentes/Cargador";

import Contexto from "./Contexto";

//  import Paginas
import Mapa from "./componentes/Mapa";
import Perfil from "./paginas/Perfil";
import Registro from "./paginas/Registro";
import Principal from "./paginas/Principal";
import Publicacion from "./paginas/Publicacion";
import NoEncontrada from "./paginas/NoEncontrada";
import InicioSesion from "./paginas/InicioSesion";
import Publicaciones from "./paginas/Publicaciones";
import RecuperarCuenta from "./paginas/RecuperarCuenta";
import ComparacionMascotas from "./paginas/ComparacionMascotas";
import AgregarPublicacionMenu from "./paginas/AgregarPublicacionMenu";
import AgregarPublicacionFormulario from "./paginas/AgregarPublicacionFormulario";
import Inicio from "./paginas/Inicio";

function App() {
  const UsuarioLogeado = ({ children }) => {
    return children({ autenticado: false });
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exac path="/mapa" component={Mapa} />
        <Route exac path="/loader" component={Cargador} />
        <Route exac path="/inicio-sesion" component={InicioSesion} />
        <Route exac path="/recuperar-cuenta" component={RecuperarCuenta} />
        <Route exac path="/registro" component={Registro} />
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
        <Route exac path="/" component={Principal} />
        <Route component={NoEncontrada} />
        <Contexto.Consumer>
          {({ autenticado }) =>
            autenticado ? (
              <Route exac path="/inicio" component={Inicio} />
            ) : (
              <Route exac path="/inicio-sesion" component={Registro} />
            )
          }
        </Contexto.Consumer>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
