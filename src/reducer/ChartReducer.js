const ChartReducer = (state = {
resultChart: {
    xAxis: {
        categories: []
    },
    series: {
        data: []
    }
}
},action) =>{
  switch(action.type) {
    case "FETCH_CHART":
    state={
      ...state,
      resultChart : action.payload
    };
    case "FETCH_CHART_FULFILLED":
    state={
      ...state,
      resultChart : action.payload
    };

    break;
    case "FETCH_CHART_REJECTED":
      alert("ไม่มีข้อมูล");
       break;

    default:
      break;
  }
  return state;
};
export default ChartReducer
