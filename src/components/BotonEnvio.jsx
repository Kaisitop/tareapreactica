import React from 'react';

const BotonEnvio = ({ 
  onClick, 
  isSubmitting, 
  isDisabled, 
  text = 'Enviar',
  loadingText = 'Enviando...',
  variant = 'primary',
  size = 'lg',
  icon = 'send'
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (!isDisabled && !isSubmitting) {
      onClick(e);
    }
  };

  return (
    <div className="d-grid">
      <button
        type="button"
        className={`btn btn-${variant} btn-${size}`}
        disabled={isDisabled || isSubmitting}
        onClick={handleClick}
      >
        {isSubmitting ? (
          <>
            <span 
              className="spinner-border spinner-border-sm me-2" 
              role="status" 
              aria-hidden="true"
            ></span>
            {loadingText}
          </>
        ) : (
          <>
            <i className={`bi bi-${icon} me-2`}></i>
            {text}
          </>
        )}
      </button>
    </div>
  );
};

export default BotonEnvio;