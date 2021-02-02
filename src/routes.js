import React from 'react';

const Statistics = React.lazy(() => import('./views/statistics/Statistics'));
// const Site = React.lazy(() => import('./views/siteStatistics/SiteStatistics'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/statistics', name: 'Statistics', component: Statistics },
  // { path: '/site', name: 'Site', component: Site },
];

export default routes;
