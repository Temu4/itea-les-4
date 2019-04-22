import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Item from './Item';
import List from './List';

const ListIndex = () => {
  return ( 
  <Switch>
    <Route path={'/page/list'} component={List} exact={true}/>
    <Route path={'/page/list/:itemid'} component={Item}/>
  </Switch>
  );
};

export default ListIndex;