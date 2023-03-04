import { useMemo, useCallback } from 'react';
import { PhoneList } from './ContactsList.styled';
import { ContactsListItem } from './ContactsListItem';

export const ContactsList = ({ contacts, onRemove }) => {
  const memoizedContacts = useMemo(() => contacts, [contacts]);

  const memoizedOnRemove = useCallback(
    (id) => {
      onRemove(id);
    },
    [onRemove]
  );

  if (memoizedContacts.length === 0) {
    return null;
  }

  return (
    <PhoneList>
      {memoizedContacts.map((contact) => (
        <ContactsListItem
          key={contact.id}
          {...contact}
          onRemove={memoizedOnRemove}
        />
      ))}
    </PhoneList>
  );
};
