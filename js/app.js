/**CREANDO VARIABLES INICIALES */
var turno = 1;
var queTurno;
var arregloMichi= new Array(9);
var celdas = document.getElementsByClassName('gato');/**es la clase de todas las celdas*/
/**Declaracion de funciones */
function ganaJugador(){

}

function gato(){
alert("funcion gato");
}

/**Declaracion de funciones a todas las celdas que tienen clase gato asignale evento click*/
/**no puedo lanzar el evento click a un array buscamos posicion, entonces usaremos ciclos while o for*/
function cargarDocumento(){
//document.getElementsByClassName("gato").addEventListener('click',gato)

var n=0; //contador

while(n<celdas.length){
console.log(n,celdas[n]);
celdas[n].addEventListener('click',gato);
n++;

}//cada vuelta es una iteracion;

}

/**Asignacion de eventos */
window.addEventListener('load', cargarDocumento);
