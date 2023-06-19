document.getElementById("inicio").style.display = "none";
estatus = false;
lista = []

function setup(){
    canvas = createCanvas(533, 300);
    canvas.center();
    background("green");
    video.hide();
    modelo = ml5.objectDetector("cocossd", cargado);
}

function preload(){
    video = createVideo("video.mp4");
}

function draw(){
    video.size(533, 300);
    image(video, 0, 0, 533, 300);
    if (estatus == true){
        modelo.detect(canvas, mostrar);
        for (contar = 0; contar<lista.length; contar ++){
            objeto = lista[contar];
            noFill();
            stroke("red");
            strokeWeight(5);
            rect(objeto.x, objeto.y, objeto.width, objeto.height);
            texto = objeto.label;
            noStroke();
            fill("white");
            text(texto, objeto.x, objeto.y);
        }
    }
}

function iniciar(){
    video.loop();
    video.volume(0);
    video.speed(1);
}

function cargado(){
    console.log("modelo cargado");
    document.getElementById("inicio").style.display = "inline-block";
    estatus = true;
}

function mostrar(error, resultados){
    if (!error){
        console.log(resultados);
        lista = resultados;
    }
}