import React from 'react';

import About from './Pages/About';
import Contacts from './Pages/Contacts';
import HomePage from './Pages/HomePage';
import ListIndex from './List';
import Error404 from './Common/Error404';

const rootRoute = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/page/about',
    component: About,
    exact: false
  },
  {
    path: '/page/contacts',
    component: Contacts,
    exact: false
  },
  {
    path: '/page/list',
    component: ListIndex,
    exact: false
  },
  {
    path: '',
    component: Error404,
    exact: false
  }
];

export default rootRoute;