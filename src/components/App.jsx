import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <b>Error: {error}</b>}
      {isLoading && <Loader />}
      <ContactList />
    </Container>
  );
};
