import{combineReducers} from 'redux'
import{routerReducer} from 'react-router-redux';

import MathReducer from './MathReducer.js';
import DataReducer from './DataReducer.js';
import RealtimeReducer from './RealtimeReducer.js';
import UserReducer from './UserReducer.js';
import StatusReducer from './StatusReducer.js';
import ChartReducer from './ChartReducer';
import DownloadReducer from './DownloadReducer';

const rootReducer = combineReducers({ math : MathReducer,
                                      user : UserReducer,
                                      db   : DataReducer,
                                      real : RealtimeReducer,
                                      chart : ChartReducer,
                                      download : DownloadReducer,
                                      router: routerReducer,
                                      status : StatusReducer});

export default rootReducer;
