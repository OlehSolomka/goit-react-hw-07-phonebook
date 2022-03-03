import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, postContactItem, deleteContactItem } from 'api/api-requests';
import {
  submitValueRequest,
  submitValueSuccess,
  submitValueError,
  getContactsSuccess,
} from './phonebook-actions';

export const getContacts = createAsyncThunk(
  'phonebook/getContactsRequest',
  async () => {
    const { data } = await getUsers();
    return data;
  }
);

export const addContact = data => async dispatch => {
  const contactItem = {
    name: data[0].toLowerCase(),
    phone: data[1],
  };

  dispatch(submitValueRequest());

  try {
    const resp = await getUsers();
    if (resp.data.find(unit => unit.name === contactItem.name)) {
      dispatch(getContactsSuccess());
      return alert(`${contactItem.name} is already in your contacts`);
    }

    const { data } = await postContactItem(contactItem);
    dispatch(submitValueSuccess(data));
  } catch (error) {
    submitValueError(error);
  }
};

export const deleteContact = createAsyncThunk(
  'phonebook/deleteValue',
  async id => {
    await deleteContactItem(id);
    return id;
  }
);
