const MathReducer = (state =  {
  result : 100,
  lastValue : [],
    }, action ) => {
      switch(action.type) {
        case "ADD":
        state={
          ...state,
          result : state.result += action.payload,
          lastValue : [...state.lastValue, action.payload]
        };

          break;
          case "SUB":
          state={
            ...state,
            result : state.result -= action.payload,
            lastValue : [...state.lastValue,action.payload]
          };

          break;
          default:
          break;
      }
      return state;
    }
  export default MathReducer;
