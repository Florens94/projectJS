/*-----------CULTURALES OPEN AIR---------- */

listaOpenAir.sort(function(a,b){
    if (a.costo > b.costo){
      return 1;
    }
    if (a.costo < b.costo){
      return -1;
    }
    return 0;
  })
  
const culturalMas = listaOpenAir.filter(local=>local.costo>=500);
const culturalMenos = listaOpenAir.filter(local=>local.costo<500);
  
let cuartoBoton = document.getElementById("btnCultural");
let padre4 = document.getElementById("seleccionCulturales");
let cultural = document.getElementById("bajadaCulturales");


cuartoBoton.onclick = function(){
  var map = L.map('map').setView([-27.352082,-55.8972992], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  $(cuartoBoton).hide();
  let presupuestoPesos = parseInt(prompt("Ingresa tu presupuesto para esta noche"));
    
  sessionStorage.setItem("entrada", presupuestoPesos);
  let presupuestoEntrada = sessionStorage.getItem("entrada");
  console.log(typeof presupuestoEntrada);
    
    cultural.innerHTML = "OPCIONES SEGUN TU PRESUPUESTO";
    let html ='';
    if (presupuestoPesos >=500){
        for (const local of culturalMas){
            $("#seleccionCulturales").append(html += `<div>
                                                      <button class="hacerReserva">
                                                      <h6>${local.nombre} </h6>
                                                      </button>
                                                      <div class="info"> ENTRADA LIBRE Y GRATUITA
                                                      <br> HORARIO DE ACTIVIDAD: ${local.horario}
                                                      <br><br>
                                                      </div>`);
        } padre4.innerHTML = html;
    } else if (presupuestoPesos <500){
        for (const local of culturalMenos){            
            $("#seleccionCulturales").append(html += `<div>
                                                  <div class="hacerReserva">
                                                  <h6>${local.nombre}</h6>
                                                  </div>
                                                  <div class="info"> ENTRADA LIBRE Y GRATUITA
                                                  <br> HORARIO DE ACTIVIDAD: ${local.horario}
                                                  <br><br>
                                                  </div>`);
        } padre4.innerHTML = html;
    }
}
    
  
  /*___JSON___*/
const cuartoJson = JSON.stringify(listaOpenAir);
console.log(typeof listaOpenAir);
console.log(typeof cuartoJson);
localStorage.setItem("eventos", JSON.stringify(listaOpenAir));
let eventosGuardados = JSON.parse(localStorage.getItem("eventos"));
console.log(typeof eventosGuardados);
console.log(eventosGuardados);
