import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['홈'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: '감염 통계',
    to: '/dashboard',
    icon: <CIcon name='cil-graph' customClasses='c-sidebar-nav-icon' />,
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2',
  },
];

export default _nav;
