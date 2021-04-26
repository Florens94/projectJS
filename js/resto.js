/* --------- GASTRONOMIA -------- */

listaResto.sort(function (a, b) {
    if (a.costo > b.costo) {
      return 1;
    }
    if (a.costo < b.costo) {
      return -1;
    }
    return 0;
  });


const restoMas = listaResto.filter(local => local.costo >=1000); 
const restoMenos = listaResto.filter(local => local.costo <1000);

let dosBoton = document.getElementById("btnResto");
let padre2 = document.getElementById("seleccionResto");
let resto = document.getElementById("bajadaResto");

dosBoton.onclick = function(){
  var map = L.map('map').setView([-27.352082,-55.8972992], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  $(dosBoton).hide();
  let presupuestoPesos = prompt("Ingresa tu presupuesto para esta noche");
  resto.innerHTML = "HACE TU RESERVA";
  let html = '';
  if (presupuestoPesos >1000){
    L.marker([-27.3737249,-55.9055171]).addTo(map).bindPopup('MENDIETA COMPLEJO GASTRONOMICO').openPopup();
    L.marker([-27.3615471,-55.889741]).addTo(map).bindPopup('EL RANCHO ASADOR CRIOLLO').openPopup();
    L.marker([-27.3589471,-55.8924079,]).addTo(map).bindPopup('ITAKUA').openPopup();
    L.marker([-27.3669682,-55.8964947]).addTo(map).bindPopup('LA QUERENCIA').openPopup();
    L.marker([-27.3631648,-55.8985399]).addTo(map).bindPopup('ROBLEDOS').openPopup();
    L.marker([-27.3605063,-55.8908896]).addTo(map).bindPopup('CRISTOBAL CAFE').openPopup();
    for (const local of restoMas){  
      $("#seleccionResto").append(html +=`<div> 
                                         <button class="hacerReserva"> 
                                         <h6>${local.nombre}</h6>
                                         </button> 
                                         <div class="info">COSTO PROMEDIO POR PERSONA: ${local.costo}
                                         <br> HORARIO DE CIERRE: ${local.horario}</div>
                                         <br> <br>
                                         </div>`);
  } padre2.innerHTML = html;
} else if (presupuestoPesos <=1000 & presupuestoPesos >0){
    L.marker([-27.3931432,-55.913536]).addTo(map).bindPopup('MOSKATO').openPopup();
    L.marker([-27.3651469,-55.8944226]).addTo(map).bindPopup('PIZZERIA LOS PINOS').openPopup();
    L.marker([-27.361297,-55.890141]).addTo(map).bindPopup('POYTAVA').openPopup();
    L.marker([-27.3741995,-55.8988623]).addTo(map).bindPopup('EL LIBANES LOMITOS').openPopup();   
    for (const local of restoMenos){
      $("#seleccionResto").append(html +=`<div> 
                                         <button class="hacerReserva"> 
                                         <h6>${local.nombre}</h6>
                                         </button> 
                                         <div class="info">COSTO PROMEDIO POR PERSONA: ${local.costo} 
                                         <br> HORARIO DE CIERRE: ${local.horario}</div>
                                         <br> <br>
                                         </div>`);
  } padre2.innerHTML = html;
} else {
    for (const local of listaResto){
      $("#seleccionResto").append(html +=`<div><button class="hacerReserva"> 
                                          <h6>${local.nombre}</h6>
                                          </button>
                                          <div class="info">COSTO PROMEDIO POR PERSONA:${local.costo}
                                          <br> HORARIO DE CIERRE:${local.horario}</div>
                                          <br> <br>
                                          </div>`);
    } padre2.innerHTML = html;
} 

$(".hacerReserva").on("click", function(_e){
    $("#seleccionResto").hide();
      $(".formResto").append(`<br><br>
                              <input type="text" placeholder="Ingresa tu nombre"> <br> <br>
                              <input type="number" placeholder="Cantidad de personas"> <br><br>
                              <input type="text" placeholder="Numero de contacto"> <br> <br>
                              <button class=envioReserva> RESERVAR </button>`);

      $(".envioReserva").on("click", function (_e) { 
        $(".formResto").submit(function (e) { 
        let datosReserva= e.target.id.substr();
        e.preventDefault();
        alert("El local se comunicara para confirmar tu reserva");
        $.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(datosReserva), (datos, estado)=> {
        console.log(datos);
        console.log(estado);
        });
        }); 
      });      
    });
}

/*___JSON___*/
const segundoJson = JSON.stringify(listaResto);
console.log(typeof listaResto);
console.log(typeof segundoJson);
localStorage.setItem("restaurantes", JSON.stringify(listaResto));
let restoGuardados = JSON.parse(localStorage.getItem("restaurantes"));
console.log(typeof restoGuardados);
console.log(restoGuardados);
