//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteA//variáveis da bolinha
let xBolinha//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

…  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}

 = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

…  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}

ltura = 90;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    verifica//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

…  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}

ColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar() 
    marcaPonto();
}
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}mostraRaquete(xRaqueteOponente, yRaqueteOponente);
42
    movimentaRaqueteOponente();
43
    incluiPlacar() 
44
    marcaPonto();
45
}    movimentaRaqueteOponente();
43
    incluiPlacar() 
44
    marcaPonto();
45
}
46
function mostraBolinha() {
46
function mostraBolinha() {
47
  circle(xBolinha, yBolinha, diametro);
48
}
49
​
50
function movimentaBolinha() {
51
  xBolinha += velocidadeXBolinha;
52
  yBolinha += velocidadeYBolinha;
53
}
54
​
55
function verificaColisaoBorda() {
56
  if (xBolinha + raio > width || xBolinha - raio < 0) {
57
    velocidadeXBolinha *= -1;
58
  }
59
  if (yBolinha + raio > height || yBolinha - raio < 0) {
60
    velocidadeYBolinha *= -1;
61
  }
62
}
63
​
64
function mostraRaquete(x,y) {
65
    rect(x, y, raqueteComprimento, raqueteAltura);
66
}
67
​
68
function movimentaMinhaRaquete() {
69
  if(keyIsDown(UP_ARROW)) {
70
    yRaquete -= 10;
71
  }
72
  if(keyIsDown(DOWN_ARROW)) {
73
    yRaquete += 10;
74
  }
75
}
76
​
77
function verificaColisaoRaquete() {
78
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
79
    velocidadeXBolinha *= -1;
80
  }
81
}
82
​
83
function verificaColisaoRaquete(x, y) {
84
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
85
    if (colidiu){
86
        velocidadeXBolinha *= -1;
87
  }

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
  }
}rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);

…    pontosDoOponente += 1;
  }
}


function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}


function incluiPlacar(){
  stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);



}


function marcaPonto() {
  if (xBolinha > 580) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}


