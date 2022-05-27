//Conversor de temperaturas.
var ce = document.getElementById('ce');
var result = document.getElementById('result');

function resetea(){
	result.innerHTML = "";	
}

ce.addEventListener('click', resetea);

function ftoc() {
	var valor = document.getElementById('valor');	
	valor = valor.value;
			
	if (valor == '') {
		result.innerHTML = '<p style="color: red;">No has ingresado ningún número.</p>';			
	} else if (valor == 0){
		result.innerHTML = '<p style="color: red;">El número no puede ser cero.</p>';
	} else {
		resultado = 100/180 * valor - 32;
		resultado = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(resultado);
		result.innerHTML = "<p><b>Resultado:</b><br> " + valor + "° Fahrenheit equivalen a " + resultado + "° Celsius.</p>";	
	}
}

function ctof() {
	var valor = document.getElementById('valor');	
	valor = valor.value;
	
	if (valor == '') {
		result.innerHTML = '<p style="color: red;">No has ingresado ningún número.</p>';
	} else if (valor == 0) {
		result.innerHTML = '<p style="color: red;">El número no puede ser cero.</p>';
	} else {
		resultado = 180/100 * valor + 32;
		resultado = parseInt(resultado);
		result.innerHTML = "<p><b>Resultado:</b><br> " + valor + "° Celsius equivalen a " + resultado + "° Fahrenheit.</p>";	
	} 	
} 

function ktoc() {
	var valor = document.getElementById('valor');
	valor = valor.value;
	
	if (valor == '') {
		result.innerHTML = '<p style="color: red;">No has ingresado ningún número.</p>';
	} else if (valor == 0) {
		result.innerHTML = '<p style="color: red;">El número no puede ser cero.</p>';
	} else {
		resultado = valor - 273;
		resultado = parseInt(resultado);
		result.innerHTML = "<p><b>Resultado:</b><br> " + valor + "° Kelvin equivalen a " + resultado + "° Celsius.</p>";
	} 	
}

function ctok() {
	var valor = document.getElementById('valor');
	valor = valor.value;
	
	if (valor == '') {
		result.innerHTML = '<p style="color: red;">No has ingresado ningún número.</p>'; 	
	} else if (valor == 0) {
		result.innerHTML = '<p style="color: red;">El número no puede ser cero.</p>';	
	} else {
		valor = parseInt(valor)
		resultado = valor + 273;
		result.innerHTML = "<p><b>Resultado:</b><br> " + valor + "° Celsius equivalen a " + resultado + "° Kelvin.</p>";
	}
}