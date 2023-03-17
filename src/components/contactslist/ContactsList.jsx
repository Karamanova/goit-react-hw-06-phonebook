import { useDispatch, useSelector } from 'react-redux';
import { getContactsList, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';
import { PhoneItem, DeleteButton, PhoneList } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  
  const contactsList = useSelector(getContactsList);
  const filterQuery = useSelector(getFilter);

  const normalizedFilter = filterQuery.toLowerCase();
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleRemove = id => {
      dispatch(removeContact(id));
  };

  if (contactsList.length === 0) {
    return null;
  }

  return (
    <PhoneList>
      {filteredContacts.map(({ id, name, number }) => (
        <PhoneItem key={id}>
          {name}: {number}{' '}
          <DeleteButton onClick={() => handleRemove(id)}>Delete</DeleteButton>
        </PhoneItem>
      ))}
    </PhoneList>
  );
};
