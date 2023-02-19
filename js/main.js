let age = prompt("Cuántos años tienes?");

const mayoriaEdad = 18;

if (age >= mayoriaEdad) {
  alert("Puedes comprar");
} else {
  alert("Regresa cuando tengas 18 años");
}

//Cálculo de precio final productos con IVA y gasto de envío
const suma = (a, b, c) => a + b + c;

const iva = (x) => x * 0.21;
let precioRodillo = 4900;
let precioEsterilla = 3999;
let precioMat = 5400;
let precioBloque = 3499;
let precioAlmohadaLumbar = 4700;
let precioKit = 12000;
let precioKitRelax = 5900;
let precioMediasAntideslizantes = 5400;
let precioBolsaYoga = 13900;
let precioAlmohadon = 7600;

let gastoEnvio = 600;

let precioFinalRodillo = suma(precioRodillo, iva(precioRodillo), gastoEnvio);
let precioFinalEsterilla = suma(
  precioEsterilla,
  iva(precioEsterilla),
  gastoEnvio
);
let precioFinalMat = suma(precioMat, iva(precioMat), gastoEnvio);
let precioFinalBloque = suma(precioBloque, iva(precioBloque), gastoEnvio);
let precioFinalAlmohadaLumbar = suma(
  precioAlmohadaLumbar,
  iva(precioAlmohadaLumbar),
  gastoEnvio
);
let precioFinalKit = suma(precioKit, iva(precioKit), gastoEnvio);
let precioFinalKitRelax = suma(precioKitRelax, iva(precioKitRelax), gastoEnvio);
let precioFinalMediasAntideslizantes = suma(
  precioMediasAntideslizantes,
  iva(precioMediasAntideslizantes),
  gastoEnvio
);
let precioFinalBolsaYoga = suma(
  precioBolsaYoga,
  iva(precioBolsaYoga),
  gastoEnvio
);
let precioFinalAlmohadon = suma(
  precioAlmohadon,
  iva(precioAlmohadon),
  gastoEnvio
);

//Cálculo de precio final de producto de Oferta incluyendo gasto de envio e iva
const resta = (a, b) => a - b;
let precioProducto = 12000;
let descuento = 1200;

let precioOferta = resta(
  suma(precioProducto, iva(precioProducto), gastoEnvio),
  descuento
);

alert(
  "Precio de Oferta Kit x 3 con gasto de envío incluido es :" +
    "" +
    precioOferta
);

//El usuario elige producto y se informa precio final
let productoElegido = prompt("Hola, desea comprar algún producto: si o no");

while (productoElegido != "si" && productoElegido != "no") {
  alert("por favor ingrese si o no");
  productoElegido = prompt("Hola, desea comprar algún producto: si o no");
}
if (productoElegido == "si") {
  productoElegido = prompt(
    "a continuación nuestra lista de productos e informate del precio total, incluido IVA y GASTOS DE ENVIO: \n 1) Rodillo \n 2) Esterilla \n 3) Mat \n 4) Bloque \n 5) AlmohadaLumbar \n 6) KitRelax \n 7) MediasAntideslizantes \n 8) BolsaYoga \n 9) Almohadon \n 10) Kit"
  );

  switch (productoElegido) {
    case "Rodillo":
      alert("precioFinalRodillo:" + " " + precioFinalRodillo);
      break;
    case "Esterilla":
      alert("precioFinalEsterilla:" + " " + precioFinalEsterilla);
      break;
    case "Mat":
      alert("precioFinalMat:" + " " + precioFinalMat);
      break;
    case "Bloque":
      alert("precioFinalBloque:" + " " + precioFinalBloque);
      break;
    case "AlmohadaLumbar":
      alert(
        "precioFinalAlmohadaLumbar:" + " " + precioFinalAlmohadaLumbar
      );
      break;
    case "Kit":
      alert("precio oferta:" + " " + precioOferta);
      break;
    case "KitRelax":
      alert("precioFinalKitRelax:" + " " + precioFinalKitRelax);
      break;
    case "MediasAntideslizantes":
      alert(
        "precioFinalMediasAntideslizantes" + " " + precioMediasAntideslizantes
      );
      break;
    case "BolsaYoga":
      alert("precioFinalBolsaYoga:" + " " + precioFinalBolsaYoga);
      break;
    case "Almohadon":
      alert("precioFinalAlmohadon:" + " " + precioFinalAlmohadon);
      break;
    default:
      alert("No tenemos ese producto. Gracias por su interés.");
      break;
  }
} else if (productoElegido == "no") {
  alert("Gracias por visitarnos!! Hasta pronto.");
}
let carritoFinal = 0;

while (productoElegido != "no") {
  let producto = prompt("agrega un producto a tu carrito");
  let calculo = 0;
  let precio = 0;
  if (
    producto == "Rodillo" ||
    producto == "Esterilla" ||
    producto == "Mat" ||
    producto == "Bloque" ||
    producto == "AlmohadaLumbar" ||
    producto == "Kit" ||
    producto == "KitRelax" ||
    producto == "MediasAntideslizantes" ||
    producto == "BolsaYoga" ||
    producto == "Almohadon"
  ) {
    switch (producto) {
      case "Rodillo":
        precio = "6529";
        break;

      case "Esterilla":
        precio = "5438";
        break;

      case "Mat":
        precio = "7134";
        break;

      case "Bloque":
        precio = "4834";
        break;
      case "AlmohadaLumbar":
        precio = "6287";
        break;
      case "Kit":
        precio = "13920";
        break;
      case "KitRelax":
        precio = "7739";
        break;
      case "MediasAntideslizantes":
        precio = "5400";
        break;
      case "BolsaYoga":
        precio = "17417";
        break;
      case "Almohadon":
        precio = "9796";
        break;
      default:
        alert("No tenemos ese producto");
        break;
    }

    let unidades = parseInt(prompt("Cuántas unidades quieres?"));
    if (producto == producto && unidades > 0) {
      calculo = precio * unidades;
      console.log(calculo);
    } else {
      alert("No tenemos ese producto");
    }

    carritoFinal = calculo + carritoFinal;

    console.log("Total Carrito: " + " " + carritoFinal);

    productoElegido = prompt("Quieres seguir comprando?");
  }
}
alert("Gracias por su compra!!.Hasta pronto");
