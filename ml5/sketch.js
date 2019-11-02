function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  const img = loadImage(
    "https://raw.githubusercontent.com/jigsawpieces/dog-api-images/master/corgi/13263927_10154125975153449_6587119903523649180_n.jpg"
  );
}

function setup() {
  createCanvas(500, 400);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  createDiv("etiqueta: " + results[0].label);
  createDiv("nivel de certeza: " + nf(results[0].confidence, 0, 2));
}
