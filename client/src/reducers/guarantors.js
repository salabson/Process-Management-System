
export default (guarantors=[], action) => {
    const {type, payload} = action;
    switch (type) {
        case "FETCH_ALL": 
            return payload;
        case "CREATE":
            return guarantors;
        default:
            return guarantors;
    };
}