var input;
var title;
var start;
var button;


let img11;
let img12;
let img13;
let img21;
let img22;
let img23;
let img31;
let img32;
let img33;

var myFont;





const urlString = window.location.href;
const url = new URL(urlString);
let name = url.searchParams.get('nome');

function preload (){
    // myFont = loadFont('assets/NeueHaasGrotesque.ttf');

    img11 = loadImage('assets/comingout.png');
    img12 = loadImage('assets/suspirium.png');
    img13 = loadImage('assets/23.png');
    img21 = loadImage('assets/virtualinsanity.png');
    img22 = loadImage('assets/reallove.png');
    img23 = loadImage('assets/porticoquartet.png');
    img31 = loadImage('assets/misread.png');
    img32 = loadImage('assets/ny.png');
    img33 = loadImage('assets/timeforus.png');
    stella = loadImage('assets/stella.png')

    song11 = loadSound('assets/music/11.mp3');
    song12 = loadSound('assets/music/12.mp3');
    song13 = loadSound('assets/music/13.mp3');
    song21 = loadSound('assets/music/21.mp3');
    song22 = loadSound('assets/music/22.mp3');
    song23 = loadSound('assets/music/23.mp3');
    song31 = loadSound('assets/music/31.mp3');
    song32 = loadSound('assets/music/32.mp3');
    song33 = loadSound('assets/music/33.mp3');
  }

function setup() {

textAlign(CENTER);
//titolo
  title = createElement("h2","HELLO " + name);
  title.style('text-transform', 'uppercase')
  title.style('font-size', '150px');
  title.style('font-family', 'neue-haas-grotesk-display');
  title.style('font-weight', 600);
  title.style('color', '#E52C2C');
//'#0000E5'

//paragrafo meteo
tempo = createElement('h1', "What's the weather today?")
tempo.style('font-size', '24px');
tempo.style('font-family', 'neue-haas-grotesk-display');
tempo.style('font-weight', 500);
tempo.style('color', 'blue')

//prima selezione
sel = createSelect();
sel.position(500, 310);
sel.option('-');
sel.option('sunny');
sel.option('cloudy');
sel.option('rainy');
sel.size(110,30 );
sel.style('font-size', '24px');
sel.style('color', 'blue');
sel.style('border-color', 'blue');
sel.changed(mute);

//paragrafo umore
umore = createElement('h1', 'How are you feeling?');
umore.style('font-size', '24px');
umore.style('font-family', 'neue-haas-grotesk-display');
umore.style('font-weight', 'light');
umore.style('font-weight', 500);
umore.style('color', 'blue')

//seconda selezione
sel2 = createSelect();
sel2.position(500, 360);
sel2.option('-');
sel2.option('happy');
sel2.option('sad');
sel2.option('stressed');
sel2.size(110,30 );
sel2.style('font-size', '24px');
sel2.style('color', 'blue');
sel2.style('border-color', 'blue');
sel2.changed(mute);

//bottone start
start = createButton('START');
start.style("background-color", "blue");
start.style("color", "white");
start.style("cursor", "pointer")
start.style("font-size", "20px");
start.style("width", "120px");
start.style("font-family", myFont);
start.style("padding", "8px 20px 8px 20px");
start.style("border-radius", "15px");
start.style("border-style", "solid");
start.style("border-color", "blue");
start.style("border-width", "2px");
start.position(500, 410);
start.mousePressed(song);


//funzione che fa stoppare la canzone, richiamata se si cambia uno dei due selettori
function mute (){
  if (song11.isPlaying() == true) {
    song11.stop()
  }
  else if (song12.isPlaying() == true) {
    song12.stop()
  }
  else if (song12.isPlaying() == true){
    song13.stop()
  }
  else if (song21.isPlaying() == true){
    songe21.stop()
  }
  else if (song22.isPlaying() == true){
    songe21.stop()
  }
  else if (song23.isPlaying() == true){
    songe21.stop()
  }
  else if (song31.isPlaying() == true){
    songe21.stop()
  }
  else if (song32.isPlaying() == true){
    songe21.stop()
  }
  else if (song33.isPlaying() == true){
    songe21.stop()
  }
}



//funzione che fa tutto (canzoni e immagini)
function song (){


  let weather= (sel.value());
  let mood = (sel2.value());


//canzone 11
if (weather === 'sunny' && mood ==='happy'){
  console.log('coming out')
  //crea canvas per immagine
  let sketch = function(p){
   p.setup = function(){
  let canvascanzone =p.createCanvas(650,650);
    p.img11 = loadImage('assets/comingout.png');
    canvascanzone.position(950, 150)
    canvascanzone.style('z-index', '-1')
   }
 p.draw = function(){
p.background(img11)
   }
}
let p1 = new p5(sketch);

//crea paragrafo con titolo canzone
text11 = createButton("Coming out - Diana Ross");
text11.style('font-size', '24px');
text11.style('color' ,'blue')
text11.style('font-family', 'neue-haas-grotesk-display')
text11.style('font-weight', 200);
text11.position(142, 775);
text11.style('margin-left', '0px')
text11.style('z-index', '+1');
text11.style('border-style', 'none');
text11.style('background-color', 'white');
text11.style('padding-right', '500px');
text11.style('z-index', '-1')


//bottone play
play = createButton('PLAY');
play.style("background-color", "blue");
play.style("color", "white");
play.style("cursor", "pointer")
play.style("font-size", "20px");
play.style("width", "120px");
play.style("font-family", myFont);
play.style("padding", "8px 20px 8px 20px");
play.style("border-radius", "15px");
play.style("border-style", "solid");
play.style("border-color", "blue");
play.style("border-width", "2px");
play.style('margin-top', '20px')
play.position(1200, 800)

// per musica
play.mousePressed(
  function() {
    if (song11.isPlaying()) {
      song11.stop();
      play.html("PLAY")
      textShow = true;
    } else {
      song11.play();
      play.html("PAUSE")
      textShow = false;
    }

  })




}


//canzone12
  else if (weather === 'sunny' && mood ==='sad'){
  console.log('suspirium')
  let sketch = function(p){
   p.setup = function(){
  let canvascanzone =p.createCanvas(650,650);
    p.img12 = loadImage('assets/suspirium.png');
    canvascanzone.position(950, 150)
        canvascanzone.style('z-index', '-1')
   }
 p.draw = function(){
p.background(img12)
   }
}
let p1 = new p5(sketch);

text12 = createButton("Suspirium - Thom Yorke");
text12.style('font-size', '24px');
text12.style('color' ,'blue')
text12.style('font-family', 'neue-haas-grotesk-display')
text12.style('z-index', '+1')
text12.style('font-weight', 200);
text12.position(142, 775);
text12.style('border-style', 'none');
text12.style('background-color', 'white');
text12.style('padding-right', '500px');
text12.style('z-index', '-1');


play = createButton('PLAY');
play.style("background-color", "blue");
play.style("color", "white");
play.style("cursor", "pointer")
play.style("font-size", "20px");
play.style("width", "120px");
play.style("font-family", myFont);
play.style("padding", "8px 20px 8px 20px");
play.style("border-radius", "15px");
play.style("border-style", "solid");
play.style("border-color", "blue");
play.style("border-width", "2px");
play.style('margin-top', '20px')
play.position(1200, 800);

play.mousePressed(
  function() {
    if (song12.isPlaying()) {
      song12.stop();
      play.html("PLAY")
      textShow = true;
    } else {
      song12.play();
      play.html("PAUSE")
      textShow = false;
    }
  })


//canzone13
} else if(weather === 'sunny' && mood ==='stressed'){
  console.log('23')
  let sketch = function(p){
   p.setup = function(){
  let canvascanzone =p.createCanvas(650,650);
    p.img13 = loadImage('assets/23.png');
    canvascanzone.position(950, 150)
        canvascanzone.style('z-index', '-1')
   }
 p.draw = function(){
p.background(img13)
   }
}
let p1 = new p5(sketch);

text13 = createButton("23 -  Rejjie Snow feat. Caroline Smith");
text13.style('font-size', '24px');
text13.style('color' ,'blue')
text13.style('font-family', 'neue-haas-grotesk-display')
text13.style('z-index', '+1')
text13.style('font-weight', 200);
text13.position(142,775);
text13.style('border-style', 'none');
text13.style('background-color', 'white');
text13.style('padding-right', '400px');
text13.style('z-index', '-1')

play = createButton('PLAY');
play.style("background-color", "blue");
play.style("color", "white");
play.style("cursor", "pointer")
play.style("font-size", "20px");
play.style("width", "120px");
play.style("font-family", myFont);
play.style("padding", "8px 20px 8px 20px");
play.style("border-radius", "15px");
play.style("border-style", "solid");
play.style("border-color", "blue");
play.style("border-width", "2px");
play.style('margin-top', '20px')
play.position(1200, 800);

play.mousePressed(
  function() {
    if (song13.isPlaying()) {
      song13.stop();
      play.html("PLAY")
      textShow = true;
    } else {
      song13.play();
      play.html("PAUSE")
      textShow = false;
    }
  })



//canzone21
} else if(weather === 'cloudy' && mood ==='happy'){
  console.log('virtualinsanity')
  let sketch = function(p){
   p.setup = function(){
  let canvascanzone =p.createCanvas(650,650);
    p.img21 = loadImage('assets/virtualinsanity.png');
    canvascanzone.position(950, 150)
        canvascanzone.style('z-index', '-1')
   }
 p.draw = function(){
p.background(img21)
   }
}
let p1 = new p5(sketch);

text21 = createButton("Virtual Insanity - Jamiroquay");
text21.style('font-size', '24px');
text21.style('color' ,'blue')
text21.style('font-family', 'neue-haas-grotesk-display')
text21.style('z-index', '+1');
text21.style('font-weight', 200);
text21.position(142,775);
text21.style('border-style', 'none');
text21.style('background-color', 'white');
text21.style('padding-right', '500px');
text21.style('z-index', '-1');


play = createButton('PLAY');
play.style("background-color", "blue");
play.style("color", "white");
play.style("cursor", "pointer")
play.style("font-size", "20px");
play.style("width", "120px");
play.style("font-family", myFont);
play.style("padding", "8px 20px 8px 20px");
play.style("border-radius", "15px");
play.style("border-style", "solid");
play.style("border-color", "blue");
play.style("border-width", "2px");
play.style('margin-top', '20px')
play.position(1200, 800);

play.mousePressed(
  function() {
    if (song21.isPlaying()) {
      song21.stop();
      play.html("PLAY")
      textShow = true;
    } else {
      song21.play();
      play.html("PAUSE")
      textShow = false;
    }
  })

//canzone22
} else if(weather === 'cloudy' && mood ==='sad'){
  console.log('real love')
  let sketch = function(p){
   p.setup = function(){
  let canvascanzone =p.createCanvas(650,650);
    p.img22 = loadImage('assets/reallove.png');
    canvascanzone.position(950, 150);
        canvascanzone.style('z-index', '-1')
   }
 p.draw = function(){
p.background(img22)
   }
}
let p1 = new p5(sketch);

text22 = createButton("Real love - Big Thief");
text22.style('font-size', '24px');
text22.style('color' ,'blue')
text22.style('font-family', 'neue-haas-grotesk-display');
text22.style('z-index', '+1');
text22.style('font-weight', 200);
text22.position(142,775);
text22.style('border-style', 'none');
text22.style('background-color', 'white');
text22.style('padding-right', '600px');
text22.style('z-index', '-1')

play = createButton('PLAY');
play.style("background-color", "blue");
play.style("color", "white");
play.style("cursor", "pointer")
play.style("font-size", "20px");
play.style("width", "120px");
play.style("font-family", myFont);
play.style("padding", "8px 20px 8px 20px");
play.style("border-radius", "15px");
play.style("border-style", "solid");
play.style("border-color", "blue");
play.style("border-width", "2px");
play.style('margin-top', '20px')
play.position(1200, 800);

play.mousePressed(
  function() {
    if (song22.isPlaying()) {
      song22.stop();
      play.html("PLAY")
      textShow = true;
    } else {
      song22.play();
      play.html("PAUSE")
      textShow = false;
    }
  })


//canzone23
} else if(weather === 'cloudy' && mood ==='stressed'){
  console.log('portico')
  let sketch = function(p){
   p.setup = function(){
  let canvascanzone =p.createCanvas(650,650);
    p.img23 = loadImage('assets/porticoquartet.png');
    canvascanzone.position(950, 150)
        canvascanzone.style('z-index', '-1')
   }
 p.draw = function(){
p.background(img23)
   }
}
let p1 = new p5(sketch);

text23 = createButton("Prickly Pear - Portico Quartet");
text23.style('font-size', '24px');
text23.style('color' ,'blue')
text23.style('font-family', 'neue-haas-grotesk-display');
text23.style('z-index', '+1');
text23.style('font-weight', 200);
text23.position(142,775);
text23.style('border-style', 'none');
text23.style('background-color', 'white');
text23.style('padding-right', '500px');
text23.style('z-index', '-1')

play = createButton('PLAY');
play.style("background-color", "blue");
play.style("color", "white");
play.style("cursor", "pointer")
play.style("font-size", "20px");
play.style("width", "120px");
play.style("font-family", myFont);
play.style("padding", "8px 20px 8px 20px");
play.style("border-radius", "15px");
play.style("border-style", "solid");
play.style("border-color", "blue");
play.style("border-width", "2px");
play.style('margin-top', '20px');
play.position(1200, 800);

play.mousePressed(
  function() {
    if (song23.isPlaying()) {
      song23.stop();
      play.html("PLAY")
      textShow = true;
    } else {
      song23.play();
      play.html("PAUSE")
      textShow = false;
    }
  })


//canzone31
} else if(weather === 'rainy' && mood ==='happy'){
  console.log('misread')
  let sketch = function(p){
   p.setup = function(){
  let canvascanzone =p.createCanvas(650,650);
    p.img31 = loadImage('assets/misread.png');
    canvascanzone.position(950, 150);
        canvascanzone.style('z-index', '-1')
   }
 p.draw = function(){
p.background(img31)
   }
}
let p1 = new p5(sketch);

text31 = createButton("Misread - Kings of Convenience");
text31.style('font-size', '24px');
text31.style('color' ,'blue')
text31.style('font-family', 'neue-haas-grotesk-display')
text31.style('z-index', '+1');
text31.style('font-weight', 200);
text31.position(142, 775);
text31.style('border-style', 'none');
text31.style('background-color', 'white');
text31.style('padding-right', '490px');
text31.style('z-index', '-1')

play = createButton('PLAY');
play.style("background-color", "blue");
play.style("color", "white");
play.style("cursor", "pointer")
play.style("font-size", "20px");
play.style("width", "120px");
play.style("font-family", myFont);
play.style("padding", "8px 20px 8px 20px");
play.style("border-radius", "15px");
play.style("border-style", "solid");
play.style("border-color", "blue");
play.style("border-width", "2px");
play.style('margin-top', '20px');
play.position(1200, 800);

play.mousePressed(
  function() {
    if (song31.isPlaying()) {
      song31.stop();
      play.html("PLAY")
      textShow = true;
    } else {
      song31.play();
      play.html("PAUSE")
      textShow = false;
    }
  })

//canzone32
} else if(weather === 'rainy' && mood ==='sad'){
  console.log('ny i love you')
  let sketch = function(p){
   p.setup = function(){
  let canvascanzone =p.createCanvas(650,650);
    p.img32 = loadImage('assets/ny.png');
    canvascanzone.position(950, 150);
        canvascanzone.style('z-index', '-1')
   }
 p.draw = function(){
p.background(img32)
   }
}
let p1 = new p5(sketch);

text32 = createButton("New York I love you, but you're bringing me down - LCD Soundsystem");
text32.style('font-size', '24px');
text32.style('color' ,'blue');
text32.style('font-family', 'neue-haas-grotesk-display');
text32.style('z-index', '+1');
text32.style('font-weight', 200);
text32.position(142, 775);
text32.style('border-style', 'none');
text32.style('background-color', 'white');
text32.style('padding-right', '70px');
text32.style('z-index', '-1')

play = createButton('PLAY');
play.style("background-color", "blue");
play.style("color", "white");
play.style("cursor", "pointer")
play.style("font-size", "20px");
play.style("width", "120px");
play.style("font-family", myFont);
play.style("padding", "8px 20px 8px 20px");
play.style("border-radius", "15px");
play.style("border-style", "solid");
play.style("border-color", "blue");
play.style("border-width", "2px");
play.style('margin-top', '20px');
play.position(1200, 800);

play.mousePressed(
  function() {
    if (song32.isPlaying()) {
      song32.stop();
      play.html("PLAY")
      textShow = true;
    } else {
      song32.play();
      play.html("PAUSE")
      textShow = false;
    }
  })

//canzone33
} else if(weather === 'rainy' && mood ==='stressed'){
  console.log('nicolas jaar')
  let sketch = function(p){
   p.setup = function(){
  let canvascanzone =p.createCanvas(650,650);
    p.img33 = loadImage('assets/timeforus.png');
    canvascanzone.position(950, 150);
        canvascanzone.style('z-index', '-1')
   }
 p.draw = function(){
p.background(img33)
   }
}
let p1 = new p5(sketch);

text33 = createButton("Time for us - Nicolas Jaar");
text33.style('font-size', '24px');
text33.style('color' ,'blue');
text33.style('font-family', 'neue-haas-grotesk-display');
text33.style('z-index', '+1');
text33.style('font-weight', 200);
text33.position(142,775);
text33.style('border-style', 'none');
text33.style('background-color', 'white');
text33.style('padding-right', '450px');
text33.style('z-index', '-1')


play = createButton('PLAY');
play.style("background-color", "blue");
play.style("color", "white");
play.style("cursor", "pointer")
play.style("font-size", "20px");
play.style("width", "120px");
play.style("font-family", myFont);
play.style("padding", "8px 20px 8px 20px");
play.style("border-radius", "15px");
play.style("border-style", "solid");
play.style("border-color", "blue");
play.style("border-width", "2px");
play.style('margin-top', '20px');
play.position(1200, 800);

play.mousePressed(
  function() {
    if (song33.isPlaying()) {
      song33.stop();
      play.html("PLAY")
      textShow = true;
    } else {
      song33.play();
      play.html("PAUSE")
      textShow = false;
    }
  })
}
}
}




//stellina
function draw() {
  let sketch = function(p){
   p.setup = function(){
  let canvasstella =p.createCanvas(300,300);
    p.stella = loadImage('assets/stella.png');
    canvasstella.position(600, 495)
        canvasstella.style('z-index', '+1')
   }
  p.draw = function(){
  p.background(stella)
   }
  }
  let p1 = new p5(sketch);



}
