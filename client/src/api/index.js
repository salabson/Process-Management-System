import axios from "axios";

// Sever base Url
//const url = "http://192.168.1.123:5000/guarantor";
const url = "http://localhost:5000/guarantor";

// CRUD Operations 
export const fetchGuarantors = () => axios.get(url);
export const createGuarantor = (newGuarantor) => axios.post(url, newGuarantor);
export const updateGuarantor =(id, updatedGuarantor) => axios.patch(`${url}/${id}`,updatedGuarantor)
export const deleteGuarantor = (id) => axios.delete(`${url}/${id}`);

