import { useState, useCallback } from 'react';
import { validateForm } from '../utils/validadores';

export const useFormValidation = (initialValues = {}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    ...initialValues
  });
  
  const [errors, setErrors] = useState({
    nombre: '',
    correo: '',
    contraseña: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Actualizar campo individual con validación en tiempo real
  const updateField = useCallback((name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validación en tiempo real
    const tempData = { ...formData, [name]: value };
    const validationResult = validateForm(tempData);
    
    setErrors(prev => ({
      ...prev,
      [name]: validationResult[name].message
    }));
  }, [formData]);

  // Resetear formulario
  const resetForm = useCallback(() => {
    setFormData({
      nombre: '',
      correo: '',
      contraseña: ''
    });
    setErrors({
      nombre: '',
      correo: '',
      contraseña: ''
    });
    setSubmitSuccess(false);
  }, []);

  // Validar formulario completo
  const validateFullForm = useCallback(() => {
    const validationResult = validateForm(formData);
    
    setErrors({
      nombre: validationResult.nombre.message,
      correo: validationResult.correo.message,
      contraseña: validationResult.contraseña.message
    });

    return validationResult.isFormValid;
  }, [formData]);

  // Simular envío del formulario
  const submitForm = useCallback(async () => {
    setIsSubmitting(true);
    
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitSuccess(true);
      console.log('Datos enviados:', formData);
      
      // Resetear después de 3 segundos
      setTimeout(() => {
        resetForm();
      }, 3000);
      
    } catch (error) {
      console.error('Error al enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, resetForm]);

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    updateField,
    resetForm,
    validateFullForm,
    submitForm
  };
};