let relogio = document.getElementById('rolex');
let  jogos = document.getElementById('jogo');
let  fogao = document.getElementById('daku');

function subir_alerta(){
    alert("Atenção: Produto em falta no momento!");
}

relogio.addEventListener('click', subir_alerta);
jogos.addEventListener('click', subir_alerta);
fogao.addEventListener('click', subir_alerta);

