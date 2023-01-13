import { nanoid } from 'nanoid';
import React from 'react';
import { useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   let contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   const arrayOfcontactsNames = contacts.map(contact => contact.name);

  //   if (arrayOfcontactsNames.includes(name)) {
  //     alert(`${name} already in your phonebook`);
  //   } else setContacts([contact, ...contacts]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Form />
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={filteredContacts()} />
    </>
  );
};
