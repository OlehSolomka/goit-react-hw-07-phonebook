import { configureStore } from '@reduxjs/toolkit';

import phonebookReducer from './phonebook/phonebook-reducers';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});

export default store;
