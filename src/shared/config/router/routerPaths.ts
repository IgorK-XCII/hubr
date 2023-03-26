import { APP_ROUTES } from './appRoutes';

export const RouterPaths: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.ABOUT]: '/about',
  [APP_ROUTES.PROFILE]: '/profile',
  [APP_ROUTES.ARTICLES]: '/articles',
  [APP_ROUTES.ARTICLE_DETAILS]: '/articles/:id',
  [APP_ROUTES.NOT_FOUND]: '*',
};
