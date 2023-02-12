class Mercaderia {
  constructor(tipo, marca, modelo, precio) {
    this.tipo = tipo;
    this.marca = marca;
    this.precio = precio;
    this.modelo = modelo;
  }
}

const Af1 = new Mercaderia("Zapatilla", "Nike", "Air Force 1", 40000);
const Tiempo = new Mercaderia("Botines", "Nike", "Tiempo", 31000);
const A270 = new Mercaderia("Zapatilla", "Nike", "Air Max 270", 42000);
const Air97 = new Mercaderia("Zapatilla", "Nike", "Air Max 97", 54000);

const Stock = [Af1, Tiempo, A270, Air97];

console.log(Stock);

function menu() {
  alert("Welcome to mi segunda pre entrega");
  let opcion = parseInt(
    prompt(
      "Que es lo que necesitas: \n 1 - Consultar Stock  \n 2 - Agregar nueva mercancia \n 3 - Cambiar los precios por la inflacion \n 4 - Quitar mercancia \n 5 - Salir"
    )
  );
  return opcion;
}

let opcion = menu();

switch (opcion) {
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
  let Mercaderia = Stock.find((Mercaderia) => Mercaderia.modelo == modelo);
  console.log(Mercaderia);
}
