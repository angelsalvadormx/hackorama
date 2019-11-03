import React, { Component } from "react";
import "./styles/Map.css";
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";


class Mapa extends Component {
  handleMarkerClick = e => {
    console.log(e.target.id);
  };

  state = {
    lat: 19.246,
    lon: -103.726,
    zoom: 13,
    data: []
  };

  constructor(props){
    super(props);
    this.state.data = this.props.datosMapa;
  }

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
