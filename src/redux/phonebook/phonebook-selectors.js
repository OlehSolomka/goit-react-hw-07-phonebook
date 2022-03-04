import { createSelector } from '@reduxjs/toolkit';

export const getContact = state => state.phonebook.contacts;
export const getLoading = ({ phonebook }) => phonebook.loading;
export const getFilterQuery = state => state.phonebook.filter.query;

export const getVisibleContacts = createSelector(
  [getContact, getFilterQuery],
  (contacts, filterQuery) => {
    const normalizedFilter = filterQuery.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
