const UserReducer = (state =  {
  resultuser : []
    }, action ) => {
      switch(action.type) {
        case "FETCH_USER":
        state={
          ...state,
          resultuser : action.payload
        };
        case "FETCH_USER_FULFILLED":
        state={
          ...state,
          resultuser : action.payload
        };

          break;
          default:
          break;
      }
      return state;
    };
    export default UserReducer;
