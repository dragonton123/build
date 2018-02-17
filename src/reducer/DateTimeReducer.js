import moment from 'moment';
const DateTimeReducer = (state = {
    date: moment().format('YYYY/MM/DD'),
    ldate: moment().format('YYYY/MM/DD')
},action) =>{
  switch(action.type) {
    case "SET_DATE":
    state={
      ...state,
        date : action.payload
    };
    case "SET_LDATE":
    state={
      ...state,
      ldate : action.payload
    };

    break;

    default:
      break;
  }
  return state;
};
export default DateTimeReducer
