const DownloadReducer = (state = {
resultDb:[]
},action) =>{
  switch(action.type) {
    case "FETCH_DOWNLOAD":
    state={
      ...state,
      resultDb : action.payload
    };
    case "FETCH_DOWNLOAD_FULFILLED":
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
export default DownloadReducer
