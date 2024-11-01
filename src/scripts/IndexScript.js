function verificacionCal() {
  let calif = document.getElementById("calif").value;

  if (calif >= 90) {
    document.getElementById("mensaje").innerText = "Aprobado con honores";
  } else if (calif >= 70) {
    document.getElementById("mensaje").innerText = "Aprobado";
  } else {
    document.getElementById("mensaje").innerText = "Reprobado";
  }
}

function determinacionPar() {
  let numero = document.getElementById("paroimpar").value;
  let calc = numero % 2;

  if (calc == 0) {
    document.getElementById("mensaje2").innerText = `Su número ${numero} es Par`;
  } else {
    document.getElementById("mensaje2").innerText = `Su número ${numero} es Impar`;
  }
}

function evalDesc() {
  let monto = document.getElementById("desc").value;

  if (monto > 100) {
    let des = monto*0.10;
    monto -= des; 
    document.getElementById("mensaje3").innerText = `Su monto fue aprobado para el descuento de 10% queda total a pagar ${monto}`;
  } else if (monto <= 100) {
    document.getElementById("mensaje3").innerText = `Su monto no fue aprobado para descuento queda total a pagar ${monto}`;
  } 
}


function adivinar() {
  let aleatorio = Math.floor(Math.random() * 10)+1;
  let numeroUser = document.getElementById("adiv").value;

  if(aleatorio == numeroUser){

    document.getElementById("mensaje4").innerText = "¡Felicidades, adivinaste el número!";

  }else{

    document.getElementById("mensaje4").innerText = `Lo siento, el número era ${aleatorio}`;
  }
  
}
