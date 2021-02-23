// https://procomponents.ant.design/components/layout/

export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/',
    name: 'dashboard',
    icon: 'smile',
    children: [
      {
        path: '/dashboard/analysis',
        name: 'analysis',
        icon: 'icon-facebook',
        exact: true,
      },
    ],
  },
  {
    path: '/form',
    name: 'form',
    icon: 'setting',
    children: [
      {
        path: '/form/basic-form',
        name: 'basic-form',
        icon: 'icon-twitter',
      },
      {
        path: '/form/step-form',
        name: 'step-form',
        icon: 'smile',
      },
    ],
  },
  {
    path: '/list',
    name: 'list',
    icon: 'SlackSquare',
    children: [
      {
        path: '/list/table-list',
        name: 'table-list',
        icon: 'icon-twitter',
      },
      {
        path: '/list/card-list',
        name: 'card-list',
        icon: 'icon-facebook',
      },
    ],
  },
  {
    path: '/chart',
    name: 'd3chart',
    icon: 'setting',
    children: [
      {
        path: '/chart/bar-chart',
        name: 'bar-chart',
        icon: '',
      },
      {
        path: '/chart/tree-chart',
        name: 'tree-chart',
        icon: '',
      },
    ],
  },
  {
    path: '/editor',
    name: 'editor',
    icon: 'setting',
    children: [
      {
        path: '/editor/flow',
        name: 'flow',
      },
    ],
  },
];
