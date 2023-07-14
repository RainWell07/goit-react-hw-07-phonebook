import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../Redux/operations';
import {
handleFulfilled,
handleFulfilledAdd,
handleFulfilledDelete,
handlePending,
handleRejected
} from '../Redux/Handlers'



const initialState = {
  items: [],
  isLoading: false,
  error: null,
};


const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder

    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, handleFulfilled)
    .addCase(fetchContacts.rejected, handleRejected)

    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, handleFulfilledDelete)
    .addCase(deleteContact.rejected, handleRejected)

    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, handleFulfilledAdd)
    .addCase(addContact.rejected, handleRejected)
  }
});


export const contactsReducer = contactSlice.reducer;