import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectLoading = state => state.tasks.loading;

const getArrContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [getArrContacts, selectFilter],
  (contacts, filterWord) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterWord.toLowerCase())
    );
  }
);
