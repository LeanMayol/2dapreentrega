class Mercaderia {
  constructor(tipo, marca, modelo, precio) {
    this.tipo = tipo;
    this.marca = marca;
    this.precio = precio;
    this.modelo = modelo;
  }
}

const Af1 = new Mercaderia("Zapatilla", "Nike", "air Force 1", 40000);
const Tiempo = new Mercaderia("Botines", "Nike", "tiempo", 31000);
const A270 = new Mercaderia("Zapatilla", "Nike", "air Max 270", 42000);
const Air97 = new Mercaderia("Zapatilla", "Nike", "air Max 97", 54000);

const Stock = [Af1, Tiempo, A270, Air97];

console.log(Stock);

function menu() {
  alert("Welcome to mi segunda pre entrega");
  let eleccion = parseInt(
    prompt(
      "Que es lo que necesitas: \n 1 - Consultar Stock  \n 2 - Agregar nueva mercancia \n 3 - Cambiar los precios por la inflacion \n 4 - Quitar mercancia \n 5 - Salir"
    )
  );
  return eleccion;
}

let eleccion = menu();

switch (eleccion) {
  case 1:
    consulta();
    break;
  case 2:
    agrega();
    break;
  case 3:
    modifica();
    break;
  case 4:
    quita();
    break;
  case 5:
    salir();
    break;
  default:
    alert("Elija una opcion valida por favor.");
    break;
}

function consulta() {
  let modelo = prompt("Ingrese el modelo que quiere buscar ");
  let Mercaderia = Stock.find((Mercaderia) => Mercaderia.modelo === modelo);
  console.log(Mercaderia);
}

function agrega() {
  let tipo = prompt("Ingrese el tipo de Calzado:");
  let marca = prompt("Ingrese la Marca del calzado:");
  let modelo = prompt("Ingrese el modelo del calzado: ");
  let precio = parseInt(prompt("Ingrese el precio del calzado: "));
  let mercaderia = new Mercaderia(tipo, marca, modelo, precio);
  Stock.push(mercaderia);
  console.log(Stock);
}

function modifica() {
  let modelo = prompt("Ingrese el MODELO del calzado a modificar");
  let mercaderia = Stock.find(Mercaderia => Mercaderia.modelo === modelo);
  let indice = Stock.indexOf(Mercaderia);
  let tipo = prompt("Ingrese el tipo de Calzado:");
  let marca = prompt("Ingrese la Marca del calzado:");
  let precio = parseInt(prompt("Ingrese el precio del calzado: "));
  let nuevoPrecio = new Mercaderia(tipo, marca, modelo, precio);
  Stock.splice(indice, 1, nuevoPrecio);
  console.log(Stock);
}

function quita() {
  let modelo = prompt("Ingrese el MODELO del calzado ");
  let Mercaderia = Stock.find(Mercaderia => Mercaderia.modelo === modelo);
  let indice = Stock.indexOf(Mercaderia);
  Stock.splice(indice, 1);
  console.log(Stock);
}

function salir() {
    let nota = prompt("Te gusto el trabajo ?? (si o no)");
if (nota == "si") {
  console.log("Andreani esta preparando el envio de tus nuevas nike ");
} else if (nota == "no") {
  console.log("Seguro sos fanatico de adidas");
}
}