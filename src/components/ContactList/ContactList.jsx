import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { ButtonDelete, Title, ListItem } from './ContactList.syled';
import { deleteContact } from 'components/redux/ContactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filterQuery = useSelector(state => state.filter);

  const filteredContacts = () => {
    const normalizedFilter = filterQuery.toLowerCase();
    const filtred = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filtred;
  };

  return (
    <div>
      <Title>Contacts</Title>
      <ul>
        {filteredContacts().map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <ButtonDelete
              onClick={() => dispatch(deleteContact(id))}
              type="button"
            >
              Delete
            </ButtonDelete>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

// onClick={() => onDelete(id)}
