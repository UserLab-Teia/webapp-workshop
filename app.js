window.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('registroForm');
    var resultado = document.getElementById('resultado');
    formulario.addEventListener('submit', function (event) {
        // Validaciones previas antes de preventDefault
        event.preventDefault();
        var usuario = {
            nombre: document.getElementById('nombre').value.trim(),
            apellidoPaterno: document.getElementById('apellidoPaterno').value.trim(),
            edad: parseInt(document.getElementById('edad').value, 10),
            genero: document.getElementById('genero').value,
            pais: document.getElementById('pais').value
        };
            var nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(usuario.nombre);
            var apellidoValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(usuario.apellidoPaterno);
            if (!usuario.nombre || !usuario.apellidoPaterno || isNaN(usuario.edad) || !usuario.genero || !usuario.pais || !nombreValido || !apellidoValido) {
                resultado.textContent = 'Por favor, complete todos los campos correctamente. Nombre y Apellido no deben contener números.';
                resultado.style.color = 'red';
                return;
            }
        resultado.textContent = "Registro exitoso: ".concat(usuario.nombre, " ").concat(usuario.apellidoPaterno, ", Edad: ").concat(usuario.edad, ", Género: ").concat(usuario.genero, ", País: ").concat(usuario.pais);
        resultado.style.color = '#0078d4';
    });
});
