import API from './api-common';

export const getUsers = () => {
  return API.get('/Contacts');
};

export const postContactItem = contact => {
  return API.post('/Contacts', contact);
};

export const deleteContactItem = id => {
  return API.delete(`/Contacts/${id}`);
};
