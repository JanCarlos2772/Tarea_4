// src/App.js
import React, { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import './App.css';

const API_URL = 'http://www.raydelto.org/agenda.php';

function App() {
  const [contacts, setContacts] = useState([]);

  // GET: Obtener los contactos
  const fetchContacts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error al obtener contactos:', error);
    }
  };

  // POST: Agregar contacto
  const addContact = async (nuevoContacto) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoContacto),
      });

      if (response.ok) {
        alert('Contacto agregado correctamente');
        await fetchContacts(); // Recargar la lista
      } else {
        alert('Error al agregar contacto');
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="App">
      <h1>Agenda Multicapas</h1>
      <AddContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
