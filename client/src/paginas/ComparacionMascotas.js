import React from 'react';
// Import componentes
import Menu from '../componentes/Menu';
import Titulo from '../componentes/Titulo';
import { Link } from 'react-router-dom';


const ComparacionMAscotas = () => {
  const json = [
    {
      "id": 1,
      "imagen": "https://i2.wp.com/www.silocreativo.com/wp-content/uploads/2017/12/visual-code-portada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
    },
    {
      "id": 2,
      "imagen": "https://i2.wp.com/www.silocreativo.com/wp-content/uploads/2017/12/visual-code-portada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
    },
    {
      "id": 3,
      "imagen": "https://i2.wp.com/www.silocreativo.com/wp-content/uploads/2017/12/visual-code-portada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
    },
    {
      "id": 4,
      "imagen": "https://i2.wp.com/www.silocreativo.com/wp-content/uploads/2017/12/visual-code-portada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
    },
    {
      "id": 5,
      "imagen": "https://i2.wp.com/www.silocreativo.com/wp-content/uploads/2017/12/visual-code-portada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
    }
  ];

  const todoItems = json.map(item =>
    <Link to={"/publicacion/"+item.id} className="w-45 h-250 m-1">
      <article className="bkg-img w-100 h-100" style={{ backgroundImage: 'url(' + item.imagen + ')' }}></article>
    </Link>
  );
  return (
    <React.Fragment>
      <Titulo titulo="Posibles coinsidencias" descripcion="test" />
      <div className="d-flex flex-wrap w-100">
        {todoItems}
      </div>
      <Menu />
    </React.Fragment>
  );
};

export default ComparacionMAscotas;