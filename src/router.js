import React from 'react';
import {Route,Switch} from 'react-router-dom';

import AnotherComponent from './component/another.component.js'
import DataComponent from './component/data.component.js'
import RealtimedataComponent from './component/realtimedata.component.js'
import Demo from './component/Demo.component.js'
import rootData from './component/root.data.component.js'
import StatusComponent from './component/status.component.js'
import HomeComponent from './component/home.component.js'
import ChartComponent from './component/chart.component.js'
import ControlComponent from './component/control.component'
import AdminComponent from './component/admin.component'
const router =
<Switch>
              {/*<Route exact path="/" component={HomeComponent}/>*/}
              <Route exact path="/" component={RealtimedataComponent}/>
              <Route path="/data2" component={DataComponent}/>
              <Route path="/a" component={AnotherComponent}/>
              <Route path="/real" component={RealtimedataComponent}/>
              <Route path="/demo" component={Demo}/>
              <Route path="/data" component={rootData}/>
              <Route path="/status" component={StatusComponent}/>
              <Route path="/chart" component ={ChartComponent}/>
              <Route path="/control" component={ControlComponent}/>
              <Route path="/admin" component={AdminComponent}/>

</Switch>
export default router;
