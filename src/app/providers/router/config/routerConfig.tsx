import { RouteProps } from 'react-router-dom';
import { RouterPaths } from '@/shared/config/router';
import { APP_ROUTES } from '@/shared/config/router/appRoutes';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';

type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  element: JSX.Element;
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
    path: `${RouterPaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [APP_ROUTES.ARTICLES]: {
    path: `${RouterPaths.articles}`,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [APP_ROUTES.ARTICLE_DETAILS]: {
    path: `${RouterPaths.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [APP_ROUTES.ARTICLE_EDIT]: {
    path: RouterPaths.articleEdit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [APP_ROUTES.ARTICLE_CREATE]: {
    path: RouterPaths.articleCreate,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [APP_ROUTES.NOT_FOUND]: {
    path: RouterPaths.notFound,
    element: <NotFoundPage />,
  },
};
