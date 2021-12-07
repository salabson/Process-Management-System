import axios from "axios";

const url = "http://localhost:5000/guarantor";

export const fetchGuarantors = () => axios.get(url);
