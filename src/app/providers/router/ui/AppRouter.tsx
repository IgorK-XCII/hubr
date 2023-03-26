import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/widgets';
import { routerConfig } from '../config/routerConfig';
import { useAppSelector } from '@/shared/lib';
import { getUserAuthData } from '@/entities';

export const AppRouter = () => {
  const isAuth = useAppSelector(getUserAuthData);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routerConfig)
          .filter(
            (route) => !route.authOnly || isAuth,
          )
          .map((props) => (
            <Route
              {...props}
              element={<div className="page-wrapper">{props.element}</div>}
              key={props.path}
            />
          ))}
      </Routes>
    </Suspense>
  );
};
