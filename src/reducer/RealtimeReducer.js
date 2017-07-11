const RealtimeReducer = (state = {
resultreal:[]
},action) =>{
  switch(action.type) {
    case "FETCH_REAL":
    state={
      ...state,
      resultreal : action.payload
    };
    case "FETCH_REAL_FULFILLED":
    state={
      ...state,
      resultreal : action.payload
    };

    break;

    default:
      break;
  }
  return state;
};
export default RealtimeReducer
