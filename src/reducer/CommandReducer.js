const CommandReducer = (state = {
resultcommand:[]
},action) =>{
  switch(action.type) {
    case "FETCH_COMMAND":
    state={
      ...state,
        resultcommand : action.payload
    };
    case "FETCH_COMMAND_FULFILLED":
    state={
      ...state,
        resultcommand : action.payload
    };

    break;

    default:
      break;
  }
  return state;
};
export default CommandReducer
