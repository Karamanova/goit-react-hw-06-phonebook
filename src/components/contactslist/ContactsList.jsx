import { PhoneList, PhoneItem, DeleteButton } from './ContactsList.styled'
const ContactsListItem = ({ id, name, number, onRemove }) => {
    return (
        <PhoneItem>
            {name}: {number} <DeleteButton onClick={() => onRemove(id)}>Delete</DeleteButton>
        </PhoneItem>
    )
}
export const ContactsList = ({ contacts, onRemove }) => {
    if (contacts.length === 0) return null
    return (
        <PhoneList>
            {contacts.map(contact => <ContactsListItem key={contact.id} {...contact} onRemove={onRemove}></ContactsListItem>)}
        </PhoneList>
    )
}
// export default ContactsList