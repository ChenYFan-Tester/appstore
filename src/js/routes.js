import Today from '../pages/today';
import Games from '../pages/games';
import Apps from '../pages/apps';
import Search from '../pages/search';

const routes = [
  {
    path: '/today/',
    component: Today,
  },
  {
    path: '/games/',
    component: Games,
  },
  {
    path: '/apps/',
    component: Apps,
  },
  {
    path: '/search/',
    component: Search,
  },
  {
    path: '/app/:id',
    asyncComponent: () => import(/* webpackChunkName: "app-details" *//* webpackPreload: true */ '../pages/app-details.vue'),
  },
  {
    path: '/account/',
    popup: {
      asyncComponent: () => import(/* webpackChunkName: "account" *//* webpackPreload: true */ '../pages/account.vue'),
    },
  },
  {
    path: '(.*)',
    asyncComponent: () => import(/* webpackChunkName: "404" */ '../pages/404'),
  },  
];

export default routes;