/*------------RECITALES ----------- */

listaShows.sort(function (a, b) {
    if (a.costo > b.costo) {
      return 1;
    }
    if (a.costo < b.costo) {
      return -1;
    }
    return 0;
  });

  
const showMas = listaShows.filter(local => local.costo >=500); 
const showMenos = listaShows.filter(local => local.costo <500);

let tercerBoton = document.getElementById("btnRecis");
let padre3 = document.getElementById("seleccionRecis");
let recis = document.getElementById("bajadaRecis");

tercerBoton.onclick = function (){
    var map = L.map('map').setView([-27.352082,-55.8972992], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
    $(tercerBoton).hide();
    let presupuestoPesos = parseInt(prompt("Ingresa tu presupuesto para esta noche"));
    recis.innerHTML = "COMPRA TU ENTRADA Y RESERVA TU LUGAR";
    let html ='';
    if (presupuestoPesos >500){
      for (const local of showMas){
      $("#seleccionRecis").append(html += `<div>
                                           <button class="hacerReserva">
                                           <h6>${local.nombre}</h6>
                                           </button>
                                           <div class="info"> VALOR DE LA ENTRADA: ${local.costo}
                                           <br> HORARIO DEL SHOW: ${local.horario}</div>
                                           <br><br>
                                           </div>`);  
      } padre3.innerHTML = html;
    } else if (presupuestoPesos <=500){
        L.marker([-27.3554377,-55.9052993]).addTo(map).bindPopup('BEERLIN BAR').openPopup();
        L.marker([-27.382132,-55.9019086]).addTo(map).bindPopup('DYNAMO').openPopup();
        L.marker([-27.3736177,-55.9037921]).addTo(map).bindPopup('LA BIONDA').openPopup();
      for (const local of showMenos){
      $("#seleccionRecis").append(html +=`<div>
                                          <button class="hacerReserva">
                                          <h6>${local.nombre}</h6>
                                          </button>
                                          <div class="info"> VALOR DE LA ENTRADA: ${local.costo}
                                          <br> HORARIO DEL SHOW: ${local.horario}</div><br><br>
                                          </div>`);
      } padre3.innerHTML = html;
    } else{
        for (const local of listaShows){
            $("#seleccionRecis").append(html += `<div>
                                                <button class="hacerReserva">
                                                <h6>${local.nombre}</h6>
                                                </button>
                                                <div class="info"> VALOR DE LA ENTRADA: ${local.costo}
                                                <br> HORARIO DEL SHOW: ${local.horario}</div><br><br>
                                                </div>`);
        } padre3.innerHTML = html;
    }
$(".hacerReserva").on("click", function(_e){
  $("#seleccionRecis").hide();
  $(".formRecis").append(`<br><br>
                          <input type="text" placeholder="Ingresa tu nombre"> <br> <br>
                          <input type="number" placeholder="Cantidad de personas"> <br><br>
                          <input type="text" placeholder="Numero de contacto"> <br> <br>
                          <button class=envioReserva> RESERVAR </button>`);
  $(".envioReserva").on("click", function(_e){
    $(".formRecis").submit(function(e){
      let datosReserva= e.target.id.substr();
      e.preventDefault();
      alert("La banda se comunicará con vos para coordinar la entrega");
      $.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(datosReserva), (datos, estado)=> {
        console.log(datos);
        console.log(estado);
        });

    });
  });
});

}

/*___JSON___*/
const tercerJson = JSON.stringify(listaShows);
console.log(typeof listaShows);
console.log(typeof tercerJson);
localStorage.setItem("shows", JSON.stringify(listaShows));
let showsGuardados = JSON.parse(localStorage.getItem("shows"));
console.log(typeof showsGuardados);
console.log(showsGuardados);

