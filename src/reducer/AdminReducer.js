const AdminReducer = (state = {
resultAdmin:[]
},action) =>{
  switch(action.type) {
    case "FETCH_ADMIN":
    state={
      ...state,
        resultAdmin : action.payload
    };
    case "FETCH_ADMIN_FULFILLED":
    state={
      ...state,
        resultAdmin : action.payload
    };

    break;

    default:
      break;
  }
  return state;
};
export default AdminReducer
