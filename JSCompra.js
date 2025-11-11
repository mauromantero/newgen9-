let total= 0.00;

function ColocarCompra (nom, preu, imatge) {
    document.getElementById('BotonX').style.display = 'block';
    document.getElementById('Lista').style.display = 'block';
    document.getElementById('Sumatotal').style.display = 'block';
    document.getElementById('Lista').innerHTML+= "<div><img class='fotocompra' src=\""+imatge+"\" width=\"90\" height=\"90\">" + nom + "-" + preu + "€</div>";
    let precio = parseFloat(preu);
    total= precio + total
    total.toFixed(2);
    document.getElementById('Sumatotal').innerText = 'Total Aprox: ' + total.toFixed(2);

}

function botoncerrar(){
    document.getElementById('BotonX').style.display = 'none';
    document.getElementById('Lista').style.display = 'none';
    document.getElementById('Sumatotal').style.display = 'none';
    document.getElementById("Lista").innerText = ""
    total= 0.00;
}

// function xxxxx(){
// (() = Al cargar la pagina / document.addEventListener("DOMContentLoaded", () => {
//

// localStorage.setitem("loquequierasguardar", let de lo q quieras guardar) + letdeloqueuguardes = localStorage.getitem(loquehasguardado)