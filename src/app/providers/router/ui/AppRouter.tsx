import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/widgets';
import { routerConfig } from '../config/routerConfig';
import { AuthGuard } from './AuthGuard';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routerConfig)
        .map((props) => (
          <Route
            {...props}
            element={(
                props.authOnly ? (
                  <AuthGuard>
                    {props.element}
                  </AuthGuard>
                ) : props.element
            )}
            key={props.path}
          />
        ))}
    </Routes>
  </Suspense>
);
