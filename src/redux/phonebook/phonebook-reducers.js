import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  setFilterQuery,
  submitValueSuccess,
  submitValueError,
  submitValueRequest,
  deleteValueError,
  deleteValueRequest,
  deleteValueSuccess,
  getContactsSuccess,
  getContactsError,
  getContactsRequest,
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
  [deleteValueSuccess]: (state, { payload }) =>
    state.filter(unit => unit.id !== payload),
  [getContactsSuccess]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [submitValueRequest]: () => true,
  [submitValueSuccess]: () => false,
  [submitValueError]: () => false,
  [deleteValueRequest]: () => true,
  [deleteValueSuccess]: () => false,
  [deleteValueError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
});

const errorReducer = createReducer(null, {});

export default combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
