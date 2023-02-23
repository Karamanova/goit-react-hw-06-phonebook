const ContactsListItem = ({ id, name, phone, onRemove }) => {
    return (
        <li>
            {name}: {phone} <button onClick={() => onRemove(id)}>Delete</button>
        </li>
    )
}
export const ContactsList = ({ contacts, onRemove }) => {
    if (contacts.length === 0) return null
    return (
        <ul>
            {contacts.map(contact => <ContactsListItem {...contact} onRemove={onRemove}></ContactsListItem>)}
        </ul>
    )
}
// export default ContactsList