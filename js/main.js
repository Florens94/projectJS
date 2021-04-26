let titulo = document.getElementsByTagName("h2");
titulo[0].innerHTML = "Elegí tu plan para esta noche";
console.log(titulo[0].innerHTML);


function local( nuevoLocal, nuevoCosto, nuevoHorario, nuevoMap){
    this.nombre = nuevoLocal;
    this.costo = nuevoCosto;
    this.horario = nuevoHorario;
    this.map = nuevoMap;
}

/*--------- LISTAS -----------*/ 
let listaBares = [];

listaBares.push(new local("BEERLIN", 1300, "03:00 horas"));
listaBares.push(new local("ANTARES", 1600, "02:00 hs"))
listaBares.push(new local("DYNAMO", 900, "01:00 hs"));
listaBares.push(new local("FLYNN IRISH BAR", 1300, "02:00 hs"));
listaBares.push(new local("MORITAN", 1000, "02:00 hs"));
listaBares.push(new local("BRANDOM AMERICAN BAR", 1500, "01:00 hs"));
listaBares.push(new local("GONKY'S", 800, "02:00 hs"));
listaBares.push(new local("VUELOS BAR", 700, "02:00 hs"));
listaBares.push(new local("ABADIA BREWHOUSE", 1600, "01:00 hs"));
listaBares.push(new local("UNIVERSAL CLUB", 1400, "03:00 hs"));
listaBares.push(new local("LA BIONDA", 800, "00:00 hs"));


let listaResto = [];

listaResto.push(new local("PIZZERIA LOS PINOS", 700, "00:00 hs"));
listaResto.push(new local("ITAKUA", 1200, "01:00 hs"));
listaResto.push(new local("POYTAVA", 800, "01:00 hs"));
listaResto.push(new local("EL RANCHO ASADOR CRIOLLO", 1100, "00:00 hs"));
listaResto.push(new local("EL LIBANES", 800, "01:00 hs"));
listaResto.push(new local("MENDIETA", 1000, "00:00 hs"));
listaResto.push(new local("LA QUERENCIA", 1200, "01:00 hs"));
listaResto.push(new local("CRISTOBAL CAFE", 1300, "01:00 hs"));
listaResto.push(new local("MOSKATO PIZZERIA", 600, "02:00 hs"));
listaResto.push(new local("ROBLEDO'S", 1200, "02:00 hs"));


let listaShows = [];

listaShows.push(new local ("SR. GREY EN LA BIONDA", 150, "20:00 hs"));
listaShows.push(new local ("LOST TORNADOS EN DYNAMO BAR", 200, "19:00 hs"));
listaShows.push(new local ("FRANCISCO ACOSTA DJ SET EN BEERLIN", 0, "21:00 hs"));


let listaOpenAir = [];

listaOpenAir.push(new local ("CLASES DE YOGA EN EL PARQUE PARAGUAYO", 0, "17:00hs"));
listaOpenAir.push(new local ("FERIA DE EMPRENDEDORES EN LA BAJADA VIEJA", 0, "16:00 hs"));







  
