import{combineReducers} from 'redux'
import{routerReducer} from 'react-router-redux';

import MathReducer from './MathReducer.js';
import DataReducer from './DataReducer.js';
import RealtimeReducer from './RealtimeReducer.js'
import UserReducer from './UserReducer.js'


const rootReducer = combineReducers({ math : MathReducer,
                                      user : UserReducer,
                                      db   : DataReducer,
                                      real : RealtimeReducer,
                                      router: routerReducer});

export default rootReducer;
