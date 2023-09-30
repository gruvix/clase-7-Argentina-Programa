const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcion = $form["descripcion-regalo"].value;

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }
  if (nombre.length > 50) {
    return 'Este campo debe tener menos de 50 caracteres';
  }
  return '';
}

function validarCiudad(ciudad){
  let ciudadExiste = false
  const $ciudades = document.querySelectorAll('[name="ciudad"] option')
  for (let i = 0; i < $ciudades.length; i++) {
    if(ciudad === $ciudades[i].value){
      return ''
    }
  }
  return 'Esa ciudad no existe en la lista';
}

function validarDescripcionRegalo(descripcion){
  if (descripcion.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }
  if(descripcion.length > 100){
    return 'Este campo debe tener menos de 100 caracteres';
  }
  return '';
}

/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */
