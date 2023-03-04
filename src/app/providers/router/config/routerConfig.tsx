import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage, NotFoundPageLazy } from '@/pages';
import { RouterPaths } from '@/shared/config/router';
import { APP_ROUTES } from '@/shared/config/router/appRoutes';

export const routerConfig: Record<APP_ROUTES, RouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: RouterPaths.main,
    element: <MainPage />,
  },
  [APP_ROUTES.ABOUT]: {
    path: RouterPaths.about,
    element: <AboutPage />,
  },
  [APP_ROUTES.NOT_FOUND]: {
    path: RouterPaths.not_found,
    element: <NotFoundPageLazy />,
  },
};
