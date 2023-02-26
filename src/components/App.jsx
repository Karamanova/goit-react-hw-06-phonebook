import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from 'components/contactform/ContactForm';
import { ContactsList } from 'components/contactslist/ContactsList';
import { Filter } from 'components/filter/Filter';
import { Container, Title } from './App.styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleAddContact = (newContact) =>
    this.setState(({ contacts }) =>
      ({ contacts: [...contacts, newContact] }))
  handleCheckContact = (name) => {
    const { contacts } = this.state;
    const existingContact = !!contacts.find(contact => contact.name === name)
    existingContact && alert('The contact is already in contacts')
    return !existingContact
  } 
  handleRemoveContact = (id) => this.setState(({ contacts }) =>
    ({ contacts: contacts.filter(contact => contact.id !== id) }))
  handleFilterChange = (filter) => this.setState({ filter })
  getPhonebookContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
  render() {
    const phonebookContacts = this.getPhonebookContacts()
    const {filter} = this.state
    return (
      <Container>
      <Title>Phonebook</Title>
        <ContactForm onAdd={this.handleAddContact} onCheck={this.handleCheckContact}></ContactForm>
        <Title>Contacts</Title>
      <Filter filter={filter} onChange={this.handleFilterChange}></Filter>  
      <ContactsList contacts={phonebookContacts} onRemove={this.handleRemoveContact}></ContactsList>
    </Container>
    )
}
};
