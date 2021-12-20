import axios from "axios";

// Sever base Url
//const url = "http://192.168.1.123:5000/guarantor";
const url_guarantor = "http://localhost:5000/guarantor";

// CRUD Operations  guarantor
export const fetchGuarantors = () => axios.get(url_guarantor);
export const createGuarantor = (newGuarantor) => axios.post(url_guarantor, newGuarantor);
export const updateGuarantor =(id, updatedGuarantor) => axios.patch(`${url_guarantor}/${id}`,updatedGuarantor)
export const deleteGuarantor = (id) => axios.delete(`${url_guarantor}/${id}`);


const url_guarantee = "http://localhost:5000/guarantee";
// CRUD Operations  Guarantee
export const fetchGuarantees = () => axios.get(url_guarantee);
export const fetchGuaranteesByGuarantorId = (guarantorId) => axios.get(`${url_guarantee}/${guarantorId}`);
export const createGuarantee = (newGuarantee) => axios.post(url_guarantee, newGuarantee);
export const updateGuarantee =(id, updatedGuarantee) => axios.patch(`${url_guarantee}/${id}`,updatedGuarantee);
export const deleteGuarantee = (id) => axios.delete(`${url_guarantee}/${id}`);
