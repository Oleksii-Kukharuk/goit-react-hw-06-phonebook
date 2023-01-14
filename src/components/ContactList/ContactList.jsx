import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { ButtonDelete, Title, ListItem } from './ContactList.syled';
import { deleteContact } from 'components/redux/ContactsSlice';

export const ContactList = () => {
  // const deletButtonHandler = e => {
  //   console.log(e);
  // };

  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <div>
      <Title>Contacts</Title>
      <ul>
        {contacts.map(({ id, name, number }) => (
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
