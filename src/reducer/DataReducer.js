const DataReducer = (state = {
resultDb:[]
},action) =>{
  switch(action.type) {
    case "FETCH_DB":
    state={
      ...state,
      resultDb : action.payload
    };
    case "FETCH_DB_FULFILLED":
    state={
      ...state,
      resultDb : action.payload
    };

    break;

    default:
      break;
  }
  return state;
};
export default DataReducer
