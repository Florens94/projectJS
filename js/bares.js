/* --------- BARES -------- */

listaBares.sort(function (a, b) {
    if (a.costo > b.costo) {
      return 1;
    }
    if (a.costo < b.costo) {
      return -1;
    }
    return 0;
  });

const baresMas = listaBares.filter(local => local.costo >=1000); 
const baresMenos = listaBares.filter(local => local.costo <1000);

let padre1 = document.getElementById("seleccionBares");
let unBoton = document.getElementById("btnBar");
let bares = document.getElementById("bajadaBar");

unBoton.onclick = function(){
  var map = L.map('map').setView([-27.352082,-55.8972992], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  $(unBoton).hide();
  let presupuestoPesos = prompt("Ingresa tu presupuesto para esta noche");
  bares.innerHTML = "HACE TU RESERVA";
  let html = ''
  if (presupuestoPesos > 1000) {   
    L.marker([-27.352082, -55.8972992]).addTo(map).bindPopup('ANTARES BAR').openPopup();
    L.marker([-27.376594,-55.8923003]).addTo(map).bindPopup('FLYNN IRISH BAR').openPopup();
    L.marker([-27.3589928,-55.89685]).addTo(map).bindPopup('MORITAN').openPopup();
    L.marker([-27.3554377,-55.9052993]).addTo(map).bindPopup('BEERLIN BAR').openPopup();
    L.marker([-27.3598571,-55.8915258]).addTo(map).bindPopup('BRANDOM AMERICAN BAR').openPopup();
    L.marker([-27.3746163,-55.9007996]).addTo(map).bindPopup('ABADIA BREWHOUSE').openPopup();
    L.marker([-27.3708322,-55.8952669]).addTo(map).bindPopup('UNIVERSAL CLUB').openPopup();
    for (const local of baresMas){
      $("#seleccionBares").append(html +=`<div>
                                          <button class="hacerReserva"> 
                                          <h6>${local.nombre} </h6>
                                          </button>
                                          <div class="info">COSTO PROMEDIO POR PERSONA: ${local.costo} 
                                          <br> HORARIO DE CIERRE: ${local.horario}</div>
                                          <br> <br>
                                        </div>`);
    } padre1.innerHTML = html;
    } else if (presupuestoPesos <=1000 & presupuestoPesos>0){
      L.marker([-27.3646349,-55.8954669]).addTo(map).bindPopup('GONKYS').openPopup();
      L.marker([-27.3650829,-55.8977609]).addTo(map).bindPopup('VUELOS').openPopup();
      L.marker([-27.382132,-55.9019086]).addTo(map).bindPopup('DYNAMO').openPopup();
      L.marker([-27.3736177,-55.9037921]).addTo(map).bindPopup('LA BIONDA').openPopup();
      for (const local of baresMenos){
        $("#seleccionBares").append(html +=`<div>  
                                          <button class="hacerReserva"> 
                                          <h6>${local.nombre}</h6>
                                          </button>
                                          <div class="info">COSTO PROMEDIO POR PERSONA: ${local.costo} 
                                          <br> HORARIO DE CIERRE: ${local.horario}</div>
                                           <br> <br>
                                        </div>`);
    } padre1.innerHTML = html;
  } else {
    for (const local of listaBares){
      $("#seleccionBares").append(html +=`<div> 
                                          <button class="hacerReserva"> 
                                          <h6>${local.nombre}</h6>
                                          </button>
                                          <div class="info">COSTO PROMEDIO POR PERSONA:${local.costo} 
                                          <br> HORARIO DE CIERRE:${local.horario}</div>
                                          <br> <br> </div>`);
    } padre1.innerHTML = html;
  }

  $(".hacerReserva").on("click", function(_e){
    $("#seleccionBares").hide();
      $(".formReserva").append(`<br><br>
                                <input type="text" placeholder="Ingresa tu nombre"> <br> <br>
                                <input type="number" placeholder="Cantidad de personas"> <br><br>
                                <input type="text" placeholder="Numero de contacto"> <br> <br>
                                <button class=envioReserva> RESERVAR </button>`);

      $(".envioReserva").on("click", function (_e) { 
        $(".formReserva").submit(function (e) { 
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
const primerJson = JSON.stringify(listaBares);
console.log(typeof listaBares);
console.log(typeof primerJson);
localStorage.setItem("bares", JSON.stringify(listaBares));
let baresGuardados = JSON.parse(localStorage.getItem("bares"));
console.log(typeof baresGuardados);
console.log(baresGuardados);




