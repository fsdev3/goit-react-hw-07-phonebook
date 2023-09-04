import React, { useState } from 'react';
import { Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const searchResult = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (searchResult) {
      alert(`${name} is already in contacts`);
      return false;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="inputName">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        id="inputName"
        required
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="inputNumber">Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        id="inputNumber"
        required
        onChange={e => setNumber(e.target.value)}
      />
      <button type="submit">Add contact</button>
    </Form>
  );
};
