import axios from "axios";
axios.defaults.baseURL = "https://66265495052332d553227bae.mockapi.io";

export const getContacts = async () => {
  const data = axios.get("/contacts");
  console.log(data);
  return data;
};

export const createContacts = async (contact) => {
  axios.post("/contacts", contact);
};

export const deleteContacts = async () => {};
