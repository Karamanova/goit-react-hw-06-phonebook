import { useState, useEffect } from 'react';
import { ContactForm } from 'components/contactform/ContactForm';
import { ContactsList } from 'components/contactslist/ContactsList';
import { Filter } from 'components/filter/Filter';
import { Container, Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    const contactExists = contacts.some((contact) =>
      contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );
    if (contactExists) {
      alert(`The contact ${newContact.name} already exists`);
      return;
    }
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleRemoveContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const getPhonebookContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const phonebookContacts = getPhonebookContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onAdd={handleAddContact} />
      <Title>Contacts</Title>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactsList
        contacts={phonebookContacts}
        onRemove={handleRemoveContact}
      />
    </Container>
  );
};

export default App;