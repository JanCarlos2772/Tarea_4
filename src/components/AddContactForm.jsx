// src/components/AddContactForm.jsx
import React, { useState } from 'react';
import './AddContactForm.css';

const AddContactForm = ({ onAddContact }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoContacto = { nombre, apellido, telefono };
    await onAddContact(nuevoContacto);

    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Agregar Contacto</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddContactForm;



/*

*/