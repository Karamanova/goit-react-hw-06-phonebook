import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { AddButton, FormContainer, NameInput, PhoneInput, ErrorMsg } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  handleFormSubmit = (values, { resetForm }) => {
    const { onAdd } = this.props;
    onAdd({ id: nanoid(), ...values })
    resetForm();
  }

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleFormSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <FormContainer onSubmit={handleSubmit}>
            <NameInput type="text"
              name="name"
              placeholder="Enter name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required />
            {errors.name && touched.name && (
              <ErrorMsg>{errors.name}</ErrorMsg>
            )}
            <PhoneInput type="tel"
              name="number"
              placeholder="Enter phone number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required />
            {errors.number && touched.number && (
              <ErrorMsg>{errors.number}</ErrorMsg>
            )}
            <AddButton type="submit">Add Contact</AddButton>
          </FormContainer>
        )}
      </Formik>
    )
  }
};
