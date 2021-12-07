import axios from "axios";

const url = "http://192.168.1.123:5000/guarantor";

export const fetchGuarantors = () => axios.get(url);
