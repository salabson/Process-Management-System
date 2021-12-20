
export default (guarantors=[], action) => {
    const {type, payload} = action;
    switch (type) {
        case "FETCH_ALL_GUARANTORS": 
            return payload;
        case "CREATE":
            return [...guarantors, payload];
        case "DELETE":
            return guarantors;
        default:
            return guarantors;
    };
}