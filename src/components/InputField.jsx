import React from 'react';

const InputField = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  error, 
  isValid,
  helpText,
  icon,
  required = true
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  const getInputClass = () => {
    let classes = 'form-control';
    if (error) classes += ' is-invalid';
    else if (value && isValid) classes += ' is-valid';
    return classes;
  };

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label fw-semibold">
        {icon && <i className={`bi bi-${icon} me-2`}></i>}
        {label}
        {required && <span className="text-danger ms-1">*</span>}
      </label>
      
      <input
        type={type}
        className={getInputClass()}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
      
      {error && (
        <div className="invalid-feedback d-block">
          <i className="bi bi-exclamation-triangle-fill me-1"></i>
          {error}
        </div>
      )}
      
      {helpText && !error && (
        <div className="form-text">
          <i className="bi bi-info-circle me-1"></i>
          {helpText}
        </div>
      )}
    </div>
  );
};

export default InputField;