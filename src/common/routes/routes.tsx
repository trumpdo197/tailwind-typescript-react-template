import DefaultLayout from '@/layout/Default';
import LayoutLogin from '@/layout/Login';
import loadable from '@loadable/component';
import type { AppRoute } from '../types';

const HomePage = loadable(() => import('~/Home/Home'));
const LoginPage = loadable(() => import('~/Login/Login'));

export const routes: AppRoute[] = [
  {
    key: 'DefaultLayout',
    path: '/',
    element: <DefaultLayout />,
    routes: [
      {
        index: true,
        key: 'HomePage',
        element: <HomePage />
      }
    ]
  },
  {
    key: 'LoginLayout',
    path: '/login',
    element: <LayoutLogin />,
    routes: [
      {
        index: true,
        key: 'LoginPage',
        element: <LoginPage />
      }
    ]
  }
];
