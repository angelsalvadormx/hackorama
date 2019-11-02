let img;
function preload() {
  classifier = ml5.imageClassifier("MobileNet");
img = loadImage(
    "https://raw.githubusercontent.com/angelsalvadormx/hackorama/develop/ml5/img/stanford-dogs-dataset/images/Images/n02102318-cocker_spaniel/n02102318_8406.jpg"
  );
}


function setup() {
  createCanvas(500, 500);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

// Atrapa errores 
function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  // los resultados están ordenados por nivel de confianza 
  dog_list = [
'Chihuahua','Japanese spaniel','Maltese dog, Maltese terrier, Maltese','Pekinese, Pekingese, Peke','Shih-Tzu','Blenheim spaniel','papillon','toy terrier','Rhodesian ridgeback','Afghan hound, Afghan','basset, basset hound','beagle','bloodhound, sleuthhound','bluetick','black-and-tan coonhound','Walker hound, Walker foxhound','English foxhound','redbone','borzoi, Russian wolfhound','Irish wolfhound','Italian greyhound','whippet','Ibizan hound, Ibizan Podenco','Norwegian elkhound, elkhound','otterhound, otter hound','Saluki, gazelle hound','Scottish deerhound, deerhound','Weimaraner','Staffordshire bullterrier, Staffordshire bull terrier','American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier','Bedlington terrier','Border terrier','Kerry blue terrier','Irish terrier','Norfolk terrier','Norwich terrier','Yorkshire terrier','wire-haired fox terrier','Lakeland terrier','Sealyham terrier, Sealyham','Airedale, Airedale terrier','cairn, cairn terrier','Australian terrier','Dandie Dinmont, Dandie Dinmont terrier','Boston bull, Boston terrier','miniature schnauzer','giant schnauzer','standard schnauzer','Scotch terrier, Scottish terrier, Scottie','Tibetan terrier, chrysanthemum dog','silky terrier, Sydney silky','soft-coated wheaten terrier','West Highland white terrier','Lhasa, Lhasa apso','flat-coated retriever','curly-coated retriever','golden retriever','Labrador retriever','Chesapeake Bay retriever','German short-haired pointer','vizsla, Hungarian pointer','English setter','Irish setter, red setter','Gordon setter','Brittany spaniel','clumber, clumber spaniel','English springer, English springer spaniel','Welsh springer spaniel','cocker spaniel, English cocker spaniel, cocker','Sussex spaniel','Irish water spaniel','kuvasz','schipperke','groenendael','malinois','briard','kelpie','komondor','Old English sheepdog, bobtail','Shetland sheepdog, Shetland sheep dog, Shetland','collie','Border collie','Bouvier des Flandres, Bouviers des Flandres','Rottweiler','German shepherd, German shepherd dog, German police dog, alsatian','Doberman, Doberman pinscher','miniature pinscher','Greater Swiss Mountain dog','Bernese mountain dog','Appenzeller','EntleBucher','boxer','bull mastiff','Tibetan mastiff','French bulldog','Great Dane','Saint Bernard, St Bernard','Eskimo dog, husky','malamute, malemute, Alaskan malamute','Siberian husky','dalmatian, coach dog, carriage dog','affenpinscher, monkey pinscher, monkey dog','basenji','pug, pug-dog','Leonberg','Newfoundland, Newfoundland dog','Great Pyrenees','Samoyed, Samoyede','Pomeranian','chow, chow chow','keeshond','Brabancon griffon','Pembroke, Pembroke Welsh corgi','Cardigan, Cardigan Welsh corgi','toy poodle','miniature poodle','standard poodle','Mexican hairless'
 ]
  console.log(results[0].label +  results[0].confidence);
  
  if (dog_list.includes(results[0].label )&& results[0].confidence > .2 ){

					createDiv("raza: " + results[0].label);
					createDiv("nivel de certeza: " + nf(results[0].confidence, 0, 2));
				}
  else {
         createDiv("No reconozco un perro en la imagen, intenta una tomar una foto más clara  solamente del cuerpo entero del perro, preferiblemente de frente");
				}
}
