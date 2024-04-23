import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "../contactsApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const {data} = await getContacts();
      console.log(data);
      return data;
    } catch(e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk("contacts/addContact", async()=>{

})