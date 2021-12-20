import * as api from "../api";

export const createGuarantee = ((guarantee) => async(dispatch) => {
    try {
        const { data } = await api.createGuarantee(guarantee);
        dispatch({type:"CREATE", payload:data});
    } catch (error) {
        console.log(error.message);
    }

})

export const getGuaranteesByGuarantorId = (id) => async(dispatch)=> {
    try {
        const { data } = await api.fetchGuaranteesByGuarantorId(id);  
        dispatch({type:"FETCH_ALL_BY_GUARANTORID", payload:data})
    } catch (error) {
        console.log(error.message);
    }

}       
    


export const getGuarantees = () => async(dispatch)=> {
    try {
        const { data } = await api.fetchGuarantees();
        dispatch({type:"FETCH_ALL_GUARANTEES", payload:data});
    } catch (error) {
        console.log(error.message);
    }

}

