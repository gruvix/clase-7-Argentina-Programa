function probarValidarNombre() {
    console.assert(
        validarNombre('Timothy') === '',
        'Validar nombre no validó un nombre válido',
    );
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
  
  console.assert(
    validarNombre(
        '123123123') === 
        'Este campo solo debe contener letras',
        'Validar nombre no validó que el nombre solo contenga letras',
  );
}


function probarValidarCiudad() {
    console.assert(
        validarCiudad("Buenos Aires") === '',
        'Validar ciudad no validó una ciudad válida',
        );
    console.assert(
        validarCiudad("Chile") === 'Esa ciudad no existe en la lista',
        'Validar ciudad no validó que la ciudad no exista',
        );
    }

function probarValidarDescripcion(){
    console.assert(
        validarDescripcionRegalo('una descripcion buena') === '',
        'Validar nombre no validó una descripción válida',
        );
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que la descripción no sea vacío',
        );
    console.assert(
        validarDescripcionRegalo("asdafasdafasdafasdafasdafasdafasdafasdafasdafasdafasdafasdafasdafasdafasdafasdafasdafasdafasdafasdada") === 'Este campo debe tener menos de 100 caracteres',
        'validar nombre no validó que la descripción sea menor a 100 caracteres',
    )
}
    
probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcion();