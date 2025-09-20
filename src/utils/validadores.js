// Validador para email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: emailRegex.test(email),
    message: emailRegex.test(email) ? '' : 'Por favor ingresa un correo válido'
  };
};

// Validador para contraseña
export const validatePassword = (password) => {
  const minLength = 8;
  const isValid = password.length >= minLength;
  
  return {
    isValid,
    message: isValid ? '' : `La contraseña debe tener al menos ${minLength} caracteres`,
    remainingChars: Math.max(0, minLength - password.length)
  };
};

// Validador para nombre
export const validateName = (name) => {
  const trimmedName = name.trim();
  const isValid = trimmedName.length > 0;
  
  return {
    isValid,
    message: isValid ? '' : 'El nombre es requerido'
  };
};

// Validador general para el formulario completo
export const validateForm = (formData) => {
  const nameValidation = validateName(formData.nombre);
  const emailValidation = validateEmail(formData.correo);
  const passwordValidation = validatePassword(formData.contraseña);
  
  return {
    nombre: nameValidation,
    correo: emailValidation,
    contraseña: passwordValidation,
    isFormValid: nameValidation.isValid && emailValidation.isValid && passwordValidation.isValid
  };
};