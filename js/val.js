
    // Función para validar el formulario de registro
    function validateRegistrationForm() {
        // Obtener referencias a los campos del formulario
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var passwordInput = document.getElementById("password");
        var confirmPasswordInput = document.getElementById("confirmPassword");

        // Obtener referencias a los elementos de mensaje de error
        var nameError = document.getElementById("nameError");
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");
        var confirmPasswordError = document.getElementById("confirmPasswordError");

        // Reiniciar mensajes de error
        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        // Variable para rastrear si hay errores
        var hasErrors = false;

        // Validar nombre (por ejemplo, longitud mínima)
        if (nameInput.value.length < 3) {
            nameError.textContent = "Mínimo 3 carácteres.";
            hasErrors = true;
        }

        // Validar correo electrónico (por ejemplo, formato válido)
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = "Favor seguir formato válido.";
            hasErrors = true;
        }

        // Validar contraseña (por ejemplo, longitud mínima)
        if (passwordInput.value.length < 6) {
            passwordError.textContent = "Mínimo 6 carácteres.";
            hasErrors = true;
        }

        // Validar confirmación de contraseña
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = "Las contraseñas no coinciden.";
            hasErrors = true;
        }

        // Evitar que se envíe el formulario si hay errores
        if (hasErrors) {
            event.preventDefault(); // Evitar el envío del formulario
        }
    }

    // Agregar controlador de eventos al formulario de registro
    document.getElementById("registrationForm").addEventListener("submit", validateRegistrationForm);
