let total= 0.00;

function ColocarCompra (nom, preu) {
    document.getElementById('BotonX').style.display = 'block';
    document.getElementById('Lista').style.display = 'block';
    document.getElementById("Lista").innerText += nom + ' - ' + preu + "€" + "\n"
    let precio = parseFloat(preu);
    total= precio + total
    total.toFixed(2);
    document.getElementById('Sumatotal').innerText = 'Total Aprox: ' + total;

}

function botoncerrar(){
    document.getElementById('BotonX').style.display = 'none';
    document.getElementById('Lista').style.display = 'none';
    document.getElementById('Sumatotal').style.display = 'none';
    document.getElementById("Lista").innerText = ""
}


