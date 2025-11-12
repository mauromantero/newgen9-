
// Les variables de la suma de productes i el total de productes
let total= 0.00;
let productos= 0;

// La funció que fa que la cistella aparegui, es coloqui el texte, la imatge dels productes, surti la suma i el total de productes i aparegui el botó

function ColocarCompra (nom, preu, imatge) {
    document.getElementById('BotonX').style.display = 'block';
    document.getElementById('Lista').style.display = 'block';
    document.getElementById('Sumatotal').style.display = 'block';

    document.getElementById('Lista').innerHTML+= "<div> <img class='fotocompra' src=\""+imatge+"\" width=\"90\" height=\"90\">" + nom + "-" + preu + "€</div>";

    let precio = parseFloat(preu);
    total= precio + total
    productos = productos + 1;
    total.toFixed(2);

    document.getElementById('Sumatotal').innerText = 'Total Aprox: ' + total.toFixed(2);
    document.getElementById('Totalproductes').innerText = "Productos:  " + productos;
}

// La funció que permet amagar tot i posar 0 per resetear tot

function botoncerrar(){
    document.getElementById('BotonX').style.display = 'none';
    document.getElementById('Lista').style.display = 'none';
    document.getElementById('Sumatotal').style.display = 'none';

    document.getElementById("Lista").innerText = ""
    document.getElementById('Totalproductes').innerText = ""

    productos = 0;
    total= 0.00;
}