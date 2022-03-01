import API from '../../api';
import {
  submitValueRequest,
  submitValueSuccess,
  submitValueError,
  deleteValueError,
  deleteValueRequest,
  deleteValueSuccess,
  getContactsError,
  getContactsSuccess,
  getContactsRequest,
} from './phonebook-actions';

export const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());

  try {
    const { data } = await API.get('/Contacts');
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const addContact = data => async dispatch => {
  const contactItem = {
    name: data[0].toLowerCase(),
    phone: data[1],
  };

  dispatch(submitValueRequest());

  try {
    const resp = await API.get('/Contacts');
    if (resp.data.find(unit => unit.name === contactItem.name)) {
      return alert(`${contactItem.name} is already in your contacts`);
    }

    const { data } = await API.post('/Contacts', contactItem);
    dispatch(submitValueSuccess(data));
  } catch (error) {
    submitValueError(error);
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteValueRequest());

  try {
    await API.delete(`/Contacts/${id}`);
    dispatch(deleteValueSuccess(id));
  } catch (error) {
    deleteValueError(error);
  }
};
