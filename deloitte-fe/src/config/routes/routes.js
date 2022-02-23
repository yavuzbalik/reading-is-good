/* eslint-disable */
import { PATHS } from '../../constants/routePaths';
import { HomePage, NotFoundPage, LoginPage, RegisterPage } from '../../pages';
import { PrivateLayout, LoginLayout } from '../../layouts';


const routes = {
  login: {
    path: PATHS.LOGIN_PAGE,
    component: LoginPage,
    privateRoute: false,
    layout: LoginLayout,
    exact: false,
    key: 'login',
    name: 'Login',
    href: '/login',
  },
  register: {
    path: PATHS.REGISTER_PAGE,
    component: RegisterPage,
    privateRoute: false,
    layout: LoginLayout,
    exact: true,
    key: 'register',
    name: 'Register',
    href: '/register',
  },
  homePage: {
    path: PATHS.HOME_PAGE,
    component: HomePage,
    privateRoute: true,
    layout: PrivateLayout,
    exact: true,
    key: 'home',
    name: 'Home',
    href: '/home',
  },
  
  notFound: {
    path: '*',
    component: NotFoundPage,
    privateRoute: true,
    layout: LoginLayout,
    exact: false,
    key: 'notfound',
    name: 'Not Found',
    href: '/notfound',
  },
};

export default routes;
