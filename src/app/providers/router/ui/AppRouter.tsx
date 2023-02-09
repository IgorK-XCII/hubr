import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routerConfig } from "../config/routerConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
};
