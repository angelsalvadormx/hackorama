import React from 'react';
import { Link } from 'react-router-dom';

const menu = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-bottom navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/inicio" className="nav-item nav-link active"><i className="fas fa-map-marked-alt"></i></Link>
          <Link to="/comparacion" className="nav-item nav-link"><i className="fas fa-search-location"></i></Link>
          <Link to="/productos" className="nav-item nav-link"><i className="far fa-newspaper"></i></Link>
          <Link to="/productos" className="nav-item nav-link"><i className="fas fa-user-circle"></i></Link>
        </div>
      </div>
    </nav>
  );
}

export default menu;