import { useSelector } from 'react-redux';
import React from 'react';
import { ButtonDelete, Title, ListItem } from './ContactList.syled';

export const ContactList = () => {
  const deletButtonHandler = e => {
    console.log(e);
  };

  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <div>
      <Title>Contacts</Title>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <ButtonDelete onClick={() => deletButtonHandler()} type="button">
              Delete
            </ButtonDelete>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

// onClick={() => onDelete(id)}
