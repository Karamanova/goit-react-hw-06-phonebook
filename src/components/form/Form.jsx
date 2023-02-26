// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { AddButton, FormContainer, NameInput, PhoneInput } from './Form.styled';
const initialState = {
    name: '',
    number: '',
}
export class Form extends Component {
    state = initialState
    handleChangeForm = ({ target }) => {
        const { name, value } = target
        this.setState({[name]:value})
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        const { name, number } = this.state;
        const { onAdd } = this.props;
        const isValidatedForm = this.validatedForm()
        if (!isValidatedForm) return
        onAdd({ id: nanoid(), name, number })
        this.resetForm()
    }
    validatedForm = () => {
        const { name, number } = this.state;
        const { onCheck } = this.props;
        if (!name || !number) {
            alert('The field is empty')
            return false
        }
        return onCheck(name)
    }
    resetForm = () => this.setState(initialState)
    render() {
        const {name, number} = this.state
        return (
        <FormContainer onSubmit={this.handleFormSubmit}>
                <NameInput type="text" name="name" placeholder="Enter name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required value={name} onChange={this.handleChangeForm}>
            </NameInput>
            <PhoneInput type="tel" name="number" placeholder="Enter phone number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required value={number} onChange={this.handleChangeForm}>
            </PhoneInput>
        <AddButton type="submit">Add Contact</AddButton>
        </FormContainer >
       )
   }
};
