import { createAction } from '@reduxjs/toolkit';

export const setFilterQuery = createAction('phonebook/setFilterQuery');

export const submitValueRequest = createAction('phonebook/submitValueRequest');
export const submitValueSuccess = createAction('phonebook/submitValueSuccess');
export const submitValueError = createAction('phonebook/submitValueError');

export const deleteValueRequest = createAction('phonebook/deleteValueRequest');
export const deleteValueSuccess = createAction('phonebook/deleteValueSuccess');
export const deleteValueError = createAction('phonebook/deleteValueError');

export const getContactsRequest = createAction('phonebook/getContactsRequest');
export const getContactsSuccess = createAction('phonebook/getContactsSuccess');
export const getContactsError = createAction('phonebook/getContactsError');
