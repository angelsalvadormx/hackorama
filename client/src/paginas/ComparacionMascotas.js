import React from 'react';
import { Link } from 'react-router-dom';
// Import componentes
import Menu from '../componentes/Menu';
import Titulo from '../componentes/Titulo';
import Encabezado from '../componentes/Encabezado';

const ComparacionMAscotas = () => {
  const json = [
    {
      "id": 1,
      "fecha":"23 oct 2019",
      "nombre":"TEST",
      "raza":"TEST",
      "color":"TEST",
      "descripcion":"AJKAJAJAJAJAJFASDFKASDKFKASDFKASKDFK",
      "imagen": "https://i2.wp.com/www.silocreativo.com/wp-content/uploads/2017/12/visual-code-portada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
    },
    {
      "id": 1,
      "fecha":"23 oct 2019",
      "nombre":"TEST",
      "raza":"TEST",
      "color":"TEST",
      "descripcion":"AJKAJAJAJAJAJFASDFKASDKFKASDFKASKDFK",
      "imagen": "https://i2.wp.com/www.silocreativo.com/wp-content/uploads/2017/12/visual-code-portada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
    },
    {
      "id": 1,
      "fecha":"23 oct 2019",
      "nombre":"TEST",
      "raza":"TEST",
      "color":"TEST",
      "descripcion":"AJKAJAJAJAJAJFASDFKASDKFKASDFKASKDFK",
      "imagen": "https://i2.wp.com/www.silocreativo.com/wp-content/uploads/2017/12/visual-code-portada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
    },
    {
      "id": 1,
      "fecha":"23 oct 2019",
      "nombre":"TEST",
      "raza":"TEST",
      "color":"TEST",
      "descripcion":"AJKAJAJAJAJAJFASDFKASDKFKASDFKASKDFK",
      "imagen": "https://i2.wp.com/www.silocreativo.com/wp-content/uploads/2017/12/visual-code-portada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
    }
    
  ];

  const todoItems = json.map(item =>
    <Link to={"/publicacion/"+item.id} className="w-45 h-250 m-1">
      <section className="w-100 d-flex">
        <picture></picture>
        <main></main>
        <aside></aside>
      </section>
    </Link>
  );
  return (
    <React.Fragment>
      <Encabezado/>
      <div className="d-flex flex-wrap w-100">
        {todoItems}
      </div>
      <Menu />
    </React.Fragment>
  );
};

export default ComparacionMAscotas;