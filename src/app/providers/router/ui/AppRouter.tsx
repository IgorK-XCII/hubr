import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/widgets';
import { routerConfig } from '../config/routerConfig';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routerConfig).map((props) => (
        <Route
          {...props}
          element={<div className="page-wrapper">{props.element}</div>}
          key={props.path}
        />
      ))}
    </Routes>
  </Suspense>
);
