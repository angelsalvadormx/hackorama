import React, { Component } from "react";
import "./styles/Map.css";
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";

const data = [
  {
    id: 1,
    img: "https://fotos01.diariodeibiza.es/mmp/2018/11/21/690x278/perro.jpg",
    location: [19.266389, -103.713535]
  },
  {
    id: 2,
    img:
      "https://www.ecestaticos.com/imagestatic/clipping/90e/3fd/90e3fd84045aa2bbe7d91a89d15693ed/imagen-sin-titulo.jpg?mtime=1560855608",
    location: [19.246294, -103.720741]
  },
  {
    id: 3,
    img:
      "https://ep01.epimg.net/elpais/imagenes/2019/08/26/buenavida/1566815443_201344_1566817103_noticia_normal.jpg",
    location: [19.248725, -103.740138]
  },
  {
    id: 4,
    img: "https://t1.fr.ltmcdn.com/es/posts/8/0/1/frases_de_perros_108_600.jpg",
    location: [19.24678, -103.746658]
  },
  {
    id: 5,
    img:
      "https://cdn.aarp.net/content/dam/aarp/home-and-family/your-home/2019/05/1140-miniature-schnauzer-esp.imgcache.rev439d301610f190d8ffc66f51d1196c78.jpg",
    location: [19.240297, -103.716633]
  }
];

class Mapa extends Component {
  handleMarkerClick = e => {
    console.log(e.target.id);
  };

  state = {
    lat: 19.246,
    lon: -103.726,
    zoom: 13,
    data: data
  };

  render() {
    return (
      <Map
        className="Mapa"
        center={[this.state.lat, this.state.lon]}
        zoom={this.state.zoom}
        width={600}
        height={400}
      >
        {this.state.data.map((item, key) => {
          return (
            <Overlay
              className="marker"
              key={key}
              anchor={item.location}
              offset={[120, 79]}
            >
              <img
                src={item.img}
                onClick={this.handleMarkerClick}
								id={key}
								location={item.location}
              />
            </Overlay>
          );
        })}
      </Map>
    );
  }
}

export default Mapa;
