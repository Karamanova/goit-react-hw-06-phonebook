import { ContactForm } from 'components/contactform/ContactForm';
import { ContactsList } from 'components/contactslist/ContactsList';
import { Filter } from 'components/filter/Filter';
import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm/>
      <Title>Contacts</Title>
      <Filter/>
      <ContactsList/>
    </Container>
  );
};

export default App;