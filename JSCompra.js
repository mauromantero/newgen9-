const compra1 = parseInt(document.getElementById('compra1').value);
const compra2 = document.getElementById('compra2');
const compra3 = document.getElementById('compra3');
const compra4 = document.getElementById('compra4');
const compra5 = document.getElementById('compra5');
const compra6 = document.getElementById('compra6');
const compra7 = document.getElementById('compra7');
const compra8 = document.getElementById('compra8');


function ColocarCompra () {
    document.getElementById('Lista').style.display = 'block';
    document.getElementById("Lista").innerText = compra1 + "€";
}

function ColocarX () {
    document.getElementById('BotonX').style.display = 'block';
}