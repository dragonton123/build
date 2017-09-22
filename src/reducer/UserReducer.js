const UserReducer = (state =  {
  name : "ton",
  resultuser : {

      results: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IiIsInVzZXJuYW1lIjoiIiwibmFtZSI6IiIsImxuYW1lIjoiIiwic3RhdHVzIjoiMCJ9.-2Xm6UpvCHV2RUSGMDfQMII_RKgRf8NIt99af5iNYO0"

  },
  datauser : []
    }, action ) => {
      switch(action.type) {
        case "FETCH_USER":
        state={
          ...state,
          resultuser : action.payload
        };
        break;
        case "FETCH_USER_FULFILLED":
        state={
          ...state,
          resultuser : action.payload
        };
        break;
          case "FETCH_DATAUSER":
              state={
                  ...state,
                  datauser : action.payload
              };
              break;

        default:
          break;
      }
      return state;
    };
    export default UserReducer;
