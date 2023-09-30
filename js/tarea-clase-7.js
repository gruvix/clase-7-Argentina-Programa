const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcion = $form["descripcion-regalo"].value;


console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcion);

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }
  if (nombre.length > 50) {
    return 'Este campo debe tener menos de 50 caracteres';
  }
  return '';
}

function validarCiudad(){
  document.querySelectorAll('input[name="ciudad"]').forEach(input => {
    console.log(input.value);
  })
}

/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */
