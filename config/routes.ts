import { SmileOutlined, CrownOutlined, TabletOutlined, AntDesignOutlined } from '@ant-design/icons';

export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        // redirect: '/user/login-new',
        routes: [
          // {
          //   path: '/',
          //   redirect: '/user/login-new'
          // },
          {
            name: 'login-old',
            path: '/user/login',
            component: './User/login',
          },
          {
            name: 'login',
            path: '/user/login-new',
            component: './User/login-new'
          }
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/dashboard',
                name: 'dashboard',
                icon: 'smile',
                // icon: 'icon-shoucang1',
                routes: [
                  // {
                  //   path: '/',
                  //   redirect: '/dashboard/analysis',
                  // },
                  {
                    name: 'analysis',
                    icon: 'icon-facebook',
                    path: '/dashboard/analysis',
                    component: './dashboard/analysis',
                  },
                ]
              },
              {
                path: '/form',
                icon: 'icon-twitter',
                name: 'form',
                routes: [
                  {
                    path: '/',
                    redirect: '/form/basic-form',
                  },
                  {
                    name: 'basic-form',
                    icon: 'icon-twitter',
                    path: '/form/basic-form',
                    component: './form/basic-form'
                  },
                  {
                    name: 'step-form',
                    icon: 'smile',
                    path: '/form/step-form',
                    component: './form/step-form',
                  },
                ]
              },
              {
                path: '/list',
                icon: 'icon-twitter',
                name: 'list',
                routes: [
                  {
                    path: '/',
                    redirect: '/list/table-list'
                  },
                  {
                    name: 'table-list',
                    icon: 'smile',
                    path: '/list/table-list',
                    component: './list/table-list',
                  },
                  {
                    name: 'card-list',
                    icon: 'smile',
                    path: '/list/card-list',
                    component: './list/card-list',
                  },
                ]
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/table-list',
                component: './TableList',
              },
              {
                path: '/bar-chart',
                name: 'd3chart',
                icon: 'table',
                component: './Chart/bar-chart',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
