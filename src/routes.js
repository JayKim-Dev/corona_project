import React from 'react';

const Statistics = React.lazy(() => import('./views/statistics/Statistics'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/statistics', name: 'Statistics', component: Statistics },
];

export default routes;
