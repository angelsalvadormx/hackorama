function classify_dog(img_url) {
  const image = loadImage(img_url);
  function loadImage(url) {
    const image = new Image(200, 200);
    image.addEventListener("load", () => container.prepend(image));

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

// container = document.querySelector(".container");  // selecciona un div en el html de ser necesario
classify_dog('https://raw.githubusercontent.com/angelsalvadormx/hackorama/develop/ml5/img/stanford-dogs-dataset/images/Images/n02092339-Weimaraner/n02092339_3028.jpg');

