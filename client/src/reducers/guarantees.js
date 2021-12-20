export default (guarantees=[], action) => {
    const {type, payload} = action;
    switch (type) {
        case "FETCH_ALL_BY_GUARANTORID": 
            return payload;
        case "FETCH_ALL_GUARANTEES": 
            return payload;
        case "CREATE":
            return [...guarantees, payload];
        case "DELETE":
            return guarantees;
        case "UPDATE":
            return guarantees;
        default:
            return guarantees;
    };
}