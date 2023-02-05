import { AboutPage, MainPage } from "@/pages";
import { RouterPaths } from "@/shared/config";
import { APP_ROUTES } from "@/shared/config/router/appRoutes";
import { RouteProps } from "react-router-dom";

export const routerConfig: Record<APP_ROUTES, RouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: RouterPaths.main,
    element: <MainPage />,
  },
  [APP_ROUTES.ABOUT]: {
    path: RouterPaths.about,
    element: <AboutPage />,
  },
};
