import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['코로나 바이러스'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: '국내 발생 현황',
    to: '/statistics',
    icon: <CIcon name='cil-graph' customClasses='c-sidebar-nav-icon' />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: '시·도별 발생동황',
    to: '/site',
    icon: <CIcon name='cib-openstreetmap' customClasses='c-sidebar-nav-icon' />,
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2',
  },
];

export default _nav;
