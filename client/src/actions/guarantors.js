import * as api from "../api";

export const fetchGuarantors = () => async (dispatch) =>{

    try {
        const {data} = await api.fetchGuarantors();
        dispatch({type:"FETCH_ALL_GUARANTORS", payload:data});
    } catch (error) {
        console.log(error.message);
    }   
}

export const deleteGuarantor = (id) => async (dispatch) => {
    try {
        await api.deleteGuarantor(id);
        dispatch({type: "DELETE", payload:id});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateGuarantor = (id, updatedGuarantor) => async (dispatch)=>{
    try {
        await api.updateGuarantor(id, updatedGuarantor)
        dispatch({type: "UPDATE", payload:updatedGuarantor});
    } catch (error) {
        console.log(error.message);
    }

}

export const createGuarantor = (guarantor) => async (dispatch)=>{
    try {
        const data = await api.createGuarantor(guarantor);
        dispatch({type: "CREATE", payload:data});
    } catch (error) {
        console.log(error.message);
    }

}