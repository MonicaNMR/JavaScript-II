const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
import '../index.css'

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10,10}$/, // 7 a 10 numeros.
	comentario: /^[a-zA-Z0-9À-ÿ\s:/-_.,]{1,40}$/ // Letras, numeros, guion y guion_bajo
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false,
	comentario: false
}

const camposValor = {
	nombre: '',
	correo: '',
	telefono: '',
	comentario: ''
}

const validarFormulario = (evento) => {
	switch (evento.target.name) {  //nombre del input
		case "nombre":
			validarCampo(expresiones.nombre, evento.target, 'nombre');  //evente.target accede al evento
		break;
		case "correo":
			validarCampo(expresiones.correo, evento.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, evento.target, 'telefono');
		break;
		case "comentario":
			validarCampo(expresiones.comentario, evento.target, 'comentario');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {  //validacion, captura, 
	if(expresion.test(input.value)){  // quiero acceder al valor de input y compruebalo en expresiones   //todo correcto
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
		camposValor[campo] = input.value 
	} else {   ///algo incorrecto
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);  //cuando ingreso en el input y suelto la tecla
	input.addEventListener('blur', validarFormulario);  // cuando doy clic en cualquier lado de la pantalla
});

formulario.addEventListener('submit', (evento) => {
	evento.preventDefault(); // previniendo no enviar nada
	
	if(campos.nombre && campos.correo && campos.telefono && campos.comentario){ 
		console.log(camposValor) //valida que tenga datos en input y correctos
		formulario.reset();  //limpia formulario

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});