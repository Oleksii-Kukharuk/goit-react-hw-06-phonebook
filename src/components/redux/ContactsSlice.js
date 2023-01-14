import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const contactInitialState = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '459-12-56',
  },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactInitialState,
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        if (
          state.contacts.map(contact =>
            contact.name.includes(action.payload.name)
          )
        ) {
          alert('waba-laba-dab-dab this contact already in your Phonebook');
        } else {
          state.contacts.push(action.payload);
        }
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.contacts.filter(contact => contact.id !== action.payload.id);
        console.log(action.payload.id);
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
