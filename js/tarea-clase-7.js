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

function validarCiudad(ciudadElegida){
  let ciudadExiste = false
  const $ciudades = document.querySelectorAll('[name="ciudad"] option')
  for (let i = 0; i < $ciudades.length; i++) {
    if(ciudadElegida === $ciudades[i].value){
      return ''
    }
  }
  return 'Esa ciudad no existe en la lista';
}

/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */
