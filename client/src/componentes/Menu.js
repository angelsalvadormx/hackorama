import React from 'react';
import { Link } from 'react-router-dom';

const menu = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-bottom navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/productos" className="nav-item nav-link active"><i class="fas fa-map-marker-alt"></i></Link>
          <Link to="/productos" className="nav-item nav-link">Buscador</Link>
        </div>
      </div>
    </nav>
  );
}

export default menu;