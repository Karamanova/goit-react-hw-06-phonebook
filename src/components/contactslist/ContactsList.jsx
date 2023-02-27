import { PhoneList} from './ContactsList.styled'
import { ContactsListItem } from './ContactsListItem';
export const ContactsList = ({ contacts, onRemove }) => {
    if (contacts.length === 0) return null
    return (
        <PhoneList>
            {contacts.map(contact => <ContactsListItem key={contact.id} {...contact} onRemove={onRemove}></ContactsListItem>)}
        </PhoneList>
    )
}
