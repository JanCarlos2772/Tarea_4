// src/components/ContactList.jsx
import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      <h2>Lista de Contactos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.nombre}</td>
              <td>{contact.apellido}</td>
              <td>{contact.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;




/*

*/