
/*Esta función muestra en la pantalla los valores que se agrueguen mediante el teclado con la funcion add()*/
function setResult(value) {
    document.getElementById('screen').innerHTML = value;
}
/*Esta función toma los valores que estan en la pantalla para despues evaluarlos en la funcion calc()*/
function getResult() {
    return(document.getElementById('screen').innerHTML);
}
/*Esta función toma como parametro el
 valor que se digita en el teclado de la calculadora si es diferente de 0 o no es un numero muestra el valor en 
 la pantalla de la calculadora*/
function add(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
/*Esta función evalua lo que se ingresó a la pantalla de la calculadora mediante los botones*/
function calc() {
    var result = eval(getResult()); 
    setResult(result);
}
/*Esta función limpia la pantalla */
function Clear() { 
    setResult(0);
}

