var input;
var title;
var start;
var myFont;
var para;

const urlString = window.location.href;
const url = new URL(urlString);

function preload (){
stella = loadImage('assets/stella.png')
  }

function setup() {


  title = createElement("h1","Hello,");
  input = createInput("").attribute("placeholder", "what's your name?");
  start = createButton("START");

  title.style('font-size', '100px');
  title.style('font-family', 'neue-haas-grotesk-display');
  title.style('color', 'blue');
  title.style('margin-left', '150px')
  title.style('text-transform', 'uppercase')


  input.style('font-family', 'neue-haas-grotesk-display');
  input.style('font-size', '20px' )
  input.style('color', 'blue')
  input.style('border-color', 'blue');
  input.style("border-radius", "15px");
  input.style("border-style", "solid");
  // input.style('border-style', 'none')
  input.style('margin-left', '150px')
  input.style("padding", "10px 20px 10px 20px")


  start.style('font-family', 'neue-haas-grotesk-display');
  start.style('font-size', '20px');
  start.style('background-color', 'blue');
  start.style('color', 'white');
  start.style('border-color', 'blue');
  start.style('border-radius', '15px')
  start.style("border-style", "solid");
  start.style('border-style', 'none')
  start.style("padding", "8px 20px 8px 20px")
start.style('margin-left', '20px')

  start.mouseClicked(goTo);

para = createP('Each moment has its perfect soundtrack, <br>whatever the weather, inside and out. <br> Click start to get your personal track.')
para.style('font-size', '24px');
para.style('font-family', 'neue-haas-grotesk-display');
para.style('color', 'blue');
para.style('margin-left', '150px');
para.style('font-weight', '200');
para.position(0, 700)
para.style('margin-bottom', '150px')

}

function draw() {
  if (input.value() == ""){
  title.html("Hello, what's your name?");
} else {
  nome = input.value();
  title.html("Hello " + nome + "!")
}




let sketch = function(p){
 p.setup = function(){
let canvasstella =p.createCanvas(400,400);
  p.stella = loadImage('assets/stella.png');
  canvasstella.position(1300, 400)
  canvasstella.style('margin-right', '150px');
  canvasstella.style('margin.bottom', '150px')
      canvasstella.style('z-index', '-1')
 }
p.draw = function(){
p.background(stella)
 }
}
let p1 = new p5(sketch);
// let stellina = image(stella, 0,0)
}

function goTo(){
  if(input.value() != ""){
 nome = input.value();
    window.open(url.origin + '/2020-04-martinabracchi/index2.html?nome=' + nome, "_self");

  }
}







