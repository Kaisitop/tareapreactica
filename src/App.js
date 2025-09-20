import React from 'react';
import FormularioRegistro from './components/FormularioRegistro';
import './styles/formulario.css';

function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white py-4 mb-5">
        <div className="container">
          <h1 className="text-center">Mi Aplicación React</h1>
          <p className="text-center mb-0">Formulario de registro con validaciones</p>
        </div>
      </header>
      
      <main>
        <FormularioRegistro />
      </main>
      
      <footer className="bg-light text-center py-4 mt-5">
        <div className="container">
          <small className="text-muted">
            © 2025 Mi Aplicación React - Desarrollado con React y Bootstrap
          </small>
        </div>
      </footer>
    </div>
  );
}

export default App;
