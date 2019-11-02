import react from 'react';

const Publicacion = ({ }) => {
  return (
    <article className="card">
      <header className="card-img-top bkg-img" style={{ backgroundImage: 'url(' + publicacion.imagen + ')' }}></header>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </article>
  );
};

export default Publicacion;