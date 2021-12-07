import * as api from "../api";

export const fetchGuarantors = () => async (dispatch) =>{

    try {
        const {data} = await api.fetchGuarantors();
        dispatch({type:"FETCH_ALL", payload:data});
    } catch (error) {
        console.log(error.message);
    }   
}