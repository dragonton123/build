import React from 'react';
import {Route,Switch} from 'react-router-dom';

import AnotherComponent from './component/another.component.js'
import DataComponent from './component/data.component.js'
import RealtimedataComponent from './component/realtimedata.component.js'
import Demo from './component/Demo.component.js'
import rootData from './component/root.data.component.js'
const router =
<Switch>
              <Route exact path="/" component={AnotherComponent}/>
              <Route path="/data2" component={DataComponent}/>
              <Route path="/a" component={AnotherComponent}/>
              <Route path="/real" component={RealtimedataComponent}/>
              <Route path="/demo" component={Demo}/>
              <Route path="/data" component={rootData}/>
</Switch>
export default router;
