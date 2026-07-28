import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createContact = async (formData) => {
  const response = await API.post("/contact", formData);
  return response.data;
};
