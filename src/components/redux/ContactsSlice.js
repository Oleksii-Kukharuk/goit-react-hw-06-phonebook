import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
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
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
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
export const contactReducer = contactSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contReducer = persistReducer(persistConfig, contactReducer);

export const { addContact, deleteContact } = contactSlice.actions;
