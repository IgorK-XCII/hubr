import { RouteProps } from 'react-router-dom';
import {
  AboutPage, MainPage, NotFoundPage, ProfilePage,
} from '@/pages';
import { RouterPaths } from '@/shared/config/router';
import { APP_ROUTES } from '@/shared/config/router/appRoutes';

type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export const routerConfig: Record<APP_ROUTES, AppRouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: RouterPaths.main,
    element: <MainPage />,
  },
  [APP_ROUTES.ABOUT]: {
    path: RouterPaths.about,
    element: <AboutPage />,
  },
  [APP_ROUTES.PROFILE]: {
    path: RouterPaths.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [APP_ROUTES.NOT_FOUND]: {
    path: RouterPaths.not_found,
    element: <NotFoundPage />,
  },
};
