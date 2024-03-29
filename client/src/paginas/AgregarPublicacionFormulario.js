import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import api from "../api";
import Cargador from "../componentes/Cargador";
import { geolocated } from "react-geolocated";
import * as ml5 from '../ml/ml5.min.js';
function classify_dog(img_url) {
  const image = loadImage(img_url);
  function loadImage(url) {
    const image = new Image(200, 200);
    // image.addEventListener("load", () => container.prepend(image));

    image.addEventListener("error", () => {
      const errMsg = document.createElement("output");
      errMsg.value = `Error loading image at ${url}`;
      // container.append(errMsg);
    });

    image.crossOrigin = "anonymous";
    image.alt = "";
    image.src = url;
    return image;
  }

  const dog_list = [
    "Chihuahua",
    "Japanese spaniel",
    "Maltese dog, Maltese terrier, Maltese",
    "Pekinese, Pekingese, Peke",
    "Shih-Tzu",
    "Blenheim spaniel",
    "papillon",
    "toy terrier",
    "Rhodesian ridgeback",
    "Afghan hound, Afghan",
    "basset, basset hound",
    "beagle",
    "bloodhound, sleuthhound",
    "bluetick",
    "black-and-tan coonhound",
    "Walker hound, Walker foxhound",
    "English foxhound",
    "redbone",
    "borzoi, Russian wolfhound",
    "Irish wolfhound",
    "Italian greyhound",
    "whippet",
    "Ibizan hound, Ibizan Podenco",
    "Norwegian elkhound, elkhound",
    "otterhound, otter hound",
    "Saluki, gazelle hound",
    "Scottish deerhound, deerhound",
    "Weimaraner",
    "Staffordshire bullterrier, Staffordshire bull terrier",
    "American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier",
    "Bedlington terrier",
    "Border terrier",
    "Kerry blue terrier",
    "Irish terrier",
    "Norfolk terrier",
    "Norwich terrier",
    "Yorkshire terrier",
    "wire-haired fox terrier",
    "Lakeland terrier",
    "Sealyham terrier, Sealyham",
    "Airedale, Airedale terrier",
    "cairn, cairn terrier",
    "Australian terrier",
    "Dandie Dinmont, Dandie Dinmont terrier",
    "Boston bull, Boston terrier",
    "miniature schnauzer",
    "giant schnauzer",
    "standard schnauzer",
    "Scotch terrier, Scottish terrier, Scottie",
    "Tibetan terrier, chrysanthemum dog",
    "silky terrier, Sydney silky",
    "soft-coated wheaten terrier",
    "West Highland white terrier",
    "Lhasa, Lhasa apso",
    "flat-coated retriever",
    "curly-coated retriever",
    "golden retriever",
    "Labrador retriever",
    "Chesapeake Bay retriever",
    "German short-haired pointer",
    "vizsla, Hungarian pointer",
    "English setter",
    "Irish setter, red setter",
    "Gordon setter",
    "Brittany spaniel",
    "clumber, clumber spaniel",
    "English springer, English springer spaniel",
    "Welsh springer spaniel",
    "cocker spaniel, English cocker spaniel, cocker",
    "Sussex spaniel",
    "Irish water spaniel",
    "kuvasz",
    "schipperke",
    "groenendael",
    "malinois",
    "briard",
    "kelpie",
    "komondor",
    "Old English sheepdog, bobtail",
    "Shetland sheepdog, Shetland sheep dog, Shetland",
    "collie",
    "Border collie",
    "Bouvier des Flandres, Bouviers des Flandres",
    "Rottweiler",
    "German shepherd, German shepherd dog, German police dog, alsatian",
    "Doberman, Doberman pinscher",
    "miniature pinscher",
    "Greater Swiss Mountain dog",
    "Bernese mountain dog",
    "Appenzeller",
    "EntleBucher",
    "boxer",
    "bull mastiff",
    "Tibetan mastiff",
    "French bulldog",
    "Great Dane",
    "Saint Bernard, St Bernard",
    "Eskimo dog, husky",
    "malamute, malemute, Alaskan malamute",
    "Siberian husky",
    "dalmatian, coach dog, carriage dog",
    "affenpinscher, monkey pinscher, monkey dog",
    "basenji",
    "pug, pug-dog",
    "Leonberg",
    "Newfoundland, Newfoundland dog",
    "Great Pyrenees",
    "Samoyed, Samoyede",
    "Pomeranian",
    "chow, chow chow",
    "keeshond",
    "Brabancon griffon",
    "Pembroke, Pembroke Welsh corgi",
    "Cardigan, Cardigan Welsh corgi",
    "toy poodle",
    "miniature poodle",
    "standard poodle",
    "Mexican hairless"
  ];

  // Initialize the Image Classifier method with MobileNet
  ml5
    .imageClassifier("MobileNet")
    .then(classifier => classifier.classify(image))
    .then(results => {
      if (dog_list.includes(results[0].label) && results[0].confidence > 0.2){
          console.log(results[0].label);
         
          
      }
      else console.log("error en la imagen");
    });
}

//container = document.querySelector(".container");  // selecciona un div en el html de ser necesario
//classify_dog(container);

export default class AgregarPublicacionFormulario extends Component {
  state = {
    estado: 0,
    loading: false,
    error: null,
    form: {
      "lost_datetime": "",
      "pet":{
        "name":"",
        "color":"",
        "description":"",
        "images":[
          "https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2017/07/27/perrocallejero1_crop1501181636878.jpg_1555050301.jpg"
        ]
      },
      "postType":"",
      "location":{
        "lat": 19.246474,
        "lon": -103.715994
      }
    }
  }
  constructor(props) {
    super(props);
    this.state.estado = this.props.match.params.id;
    console.log(classify_dog());
    
  }

  enviar = async e => {
    // validar si es un perro


    e.preventDefault();
    this.state.form.postType = this.state.estado;
    this.setState({ loading: true, error: null });
    try {
      await api.create('post',this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/agregar-publicacion-menu");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }
  fecha = e => {
   this.state.form.lost_datetime = e.target.value;
  };
  nombre = e => {
    this.state.form.pet.name = e.target.value;
  };
  color = e => {
    this.state.form.pet.color = e.target.value;
  };
  descipcion = e => {
    this.state.form.pet.description = e.target.value;
  };

  render() {

    if (this.state.loading === true) {
      return <Cargador msg="Guardando Publicacion." />;
    }



    const tipo_form = this.state.estado == 1 ? 'Perdida' : this.state.estado == 2 ? 'Rescatada' : this.state.estado == 3 ? 'Sin hogar' : '';
    //<button type="button" className="w-45 p-4 shadow btn btn-light">Añadir Ubicación</button>
    return (
      <Fragment>
        <nav className="pl-4 pr-4 pt-4 d-flex justify-content-end">
          <Link to="/agregar-publicacion-menu" ><i className="text-dark fas fa-times"></i></Link>
        </nav>
        <header className="w-100 text-center pb-5 pt-1">
          <h3>Reportar mascota <br /> {tipo_form}</h3>
        </header>
        <form className="pb-5 d-flex flex-column pr-4 pl-4" onSubmit={this.enviar}>
          <input type="date" name="fecha" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Fecha" onChange={this.fecha} />
          <input type="text" name="nombre" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Nombre" onChange={this.nombre} />
          <input type="text" name="color" required className="border shadow p-3 mb-5 bg-white rounded" placeholder="Color" onChange={this.color} />
          <textarea required name="descipcion" className="border shadow p-3 mb-5 bg-white rounded" placeholder="Descipción" onChange={this.descipcion}></textarea>
          <footer className="mb-5 w-100 d-flex justify-content-around">
            <button type="button" className="w-45 p-4 shadow btn btn-light position-relative btn-file"><input type="file" className="position-absolute w-100 h-100" />Añadir Foto</button>
          </footer>
          <button type="submit" className="rounded-10 pt-2 pb-2 btn btn-primary">Enviar</button>
        </form>
      </Fragment>
    );
  };
};

