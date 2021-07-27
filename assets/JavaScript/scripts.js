const p = document.querySelector('#p');

let nicks = ["Lucas", "Fernando", "LuksFay", "Picco"];

for( i=0 ; i<nicks.length ; i++ ){
    p.innerHTML += `<p>${nicks[i]}</p>`
}

colores = ["rojo", "azul", "negro"];
for( i=0 ; i<colores.length ; i++ ){
    console.log( colores[i] );
}