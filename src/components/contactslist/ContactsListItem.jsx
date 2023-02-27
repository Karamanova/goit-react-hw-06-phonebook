import { PhoneItem, DeleteButton } from './ContactsListItem.styled';

export const ContactsListItem = ({ id, name, number, onRemove }) => {
    return (
        <PhoneItem>
            {name}: {number} <DeleteButton onClick={() => onRemove(id)}>Delete</DeleteButton>
        </PhoneItem>
    )
}
