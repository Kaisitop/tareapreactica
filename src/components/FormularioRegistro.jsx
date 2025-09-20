import React from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import { validatePassword } from '../utils/validadores';
import InputField from './InputField';
import BotonEnvio from './BotonEnvio';

const FormularioRegistro = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    updateField,
    validateFullForm,
    submitForm
  } = useFormValidation();

  const handleSubmit = () => {
    if (validateFullForm()) {
      submitForm();
    }
  };

  const passwordValidation = validatePassword(formData.contraseña);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4 text-primary">
                <i className="bi bi-person-plus-fill me-2"></i>
                Registro de Usuario
              </h2>
              
              {submitSuccess && (
                <div className="alert alert-success" role="alert">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  ¡Formulario enviado exitosamente!
                </div>
              )}

              <div>
                <InputField
                  label="Nombre completo"
                  name="nombre"
                  value={formData.nombre}
                  onChange={updateField}
                  placeholder="Ingresa tu nombre completo"
                  error={errors.nombre}
                  isValid={formData.nombre && !errors.nombre}
                  icon="person"
                />

                <InputField
                  label="Correo electrónico"
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={updateField}
                  placeholder="ejemplo@correo.com"
                  error={errors.correo}
                  isValid={formData.correo && !errors.correo}
                  icon="envelope"
                />

                <InputField
                  label="Contraseña"
                  type="password"
                  name="contraseña"
                  value={formData.contraseña}
                  onChange={updateField}
                  placeholder="Mínimo 8 caracteres"
                  error={errors.contraseña}
                  isValid={formData.contraseña && !errors.contraseña}
                  helpText={
                    formData.contraseña && passwordValidation.remainingChars > 0
                      ? `Faltan ${passwordValidation.remainingChars} caracteres`
                      : null
                  }
                  icon="lock"
                />

                <div className="mb-4">
                  <BotonEnvio
                    onClick={handleSubmit}
                    isSubmitting={isSubmitting}
                    isDisabled={Object.values(errors).some(error => error)}
                    text="Registrarse"
                    loadingText="Enviando..."
                    icon="person-plus-fill"
                  />
                </div>
              </div>

              <div className="text-center">
                <small className="text-muted">
                  Al registrarte, aceptas nuestros términos y condiciones
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioRegistro;