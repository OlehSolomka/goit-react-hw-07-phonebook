import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { getContacts, deleteContact } from './phonebook-operations';
import {
  setFilterQuery,
  submitValueSuccess,
  submitValueError,
  submitValueRequest,
} from './phonebook-actions';

const filterReducer = createReducer(
  { query: '' },
  {
    [setFilterQuery]: (state, { payload }) => {
      state.query = payload;
    },
  }
);

const contactsReducer = createReducer([], {
  [submitValueSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(unit => unit.id !== payload),
  [getContacts.fulfilled]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [submitValueRequest]: () => true,
  [submitValueSuccess]: () => false,
  [submitValueError]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
});

const errorReducer = createReducer(null, {});

export default combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
