img = "";
status = "";

function preload()
{
    img = loadImage("AC.jpg");
}

function setup()
{
    canvas = createCanvas(500, 350);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
  console.log("model Loaded!");
  status = true;
  objectDetector.detect(img, gotResults);
}

function gotResults( error , results)
{
  if (error)
  {
    console.error(error);
  }

  else
  {
    console.log(results);
    objects = results;
  }
}