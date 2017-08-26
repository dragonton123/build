const StatusReducer = (state =  {
    resultstatus : []
}, action ) => {
    switch(action.type) {
        case "FETCH_STATUS":
            state={
                ...state,
                resultstatus: action.payload
            };
        case "FETCH_STATUS_FULFILLED":
            state={
                ...state,
                resultstatus : action.payload
            };

            break;
        default:
            break;
    }
    return state;
};
export default StatusReducer;