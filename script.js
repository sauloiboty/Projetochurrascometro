// Carne - 400g por pessoa, a partir de 6 horas=650g
// Cerveja - 1200 ml por pessoa, a partir de 6 horas=2000ml
// Refrigerante/Água - 1000 ml por pessoa, a partir de 6 horas = 1500 ml

// Crianças valem por 0,5


let inputAdultos= document.getElementById("adultos");
let inputCriancas= document.getElementById("criancas");
let inputDuracao= document.getElementById("duracao");

let resultado= document.getElementById("resultado");

function calcular() {
    
    let adultos= inputAdultos.value;
    let criancas= inputCriancas.value;
    let duracao= inputDuracao.value;
    
    let totalcarne= carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas); 
    let totalcerveja= cervejapp(duracao) * adultos;
    let totalrefri= refripp(duracao)* adultos + (refripp(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${totalcarne/1000}Kg de Carne</p> `
    resultado.innerHTML += `<p>${Math.ceil(totalcerveja/350)}Latas de 350Ml de Cerveja</p> `
    resultado.innerHTML += `<p>${totalrefri/1000}Litros de Refrigerante</p> `
}

function carnepp(duracao){
    if(duracao >= 6 ) {
        return 650;
    } else {
        return 400;
    }
}
function cervejapp(duracao){
    if(duracao >= 6 ) {
        return 2000;
    } else {
        return 1200;
    }
}
function refripp(duracao){
    if(duracao >= 6 ) {
        return 1500;
    } else {
        return 1000;
    }
}