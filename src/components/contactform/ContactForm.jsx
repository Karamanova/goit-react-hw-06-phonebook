import React from 'react';
import { nanoid } from 'nanoid';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import {
  AddButton,
  FormContainer,
  NameInput,
  PhoneInput,
  ErrorMsg,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();


  
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(addContact({ id: nanoid(), ...values }));
      resetForm();
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <NameInput
        type="text"
        name="name"
        placeholder="Enter name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      {formik.errors.name && formik.touched.name && (
        <ErrorMsg>{formik.errors.name}</ErrorMsg>
      )}
      <PhoneInput
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      {formik.errors.number && formik.touched.number && (
        <ErrorMsg>{formik.errors.number}</ErrorMsg>
      )}
      <AddButton type="submit">Add Contact</AddButton>
    </FormContainer>
  );
};