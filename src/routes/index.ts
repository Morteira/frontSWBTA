import { lazy } from 'react';

const Default = lazy(() => import('../pages/Default'));

const coreRoutes = [
  {
    path: '/Default',
    title: 'Default',
    component: Default,
  }
];

const routes = [...coreRoutes];
export default routes;
