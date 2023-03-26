import { Navigate, useLocation } from 'react-router-dom';
import { useIsUserAuth } from '@/entities';
import { RouterPaths } from '@/shared/config/router';

interface AuthGuardProps {
  children: JSX.Element;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuth = useIsUserAuth();
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate to={RouterPaths.main} state={{ from: location }} replace />
    );
  }

  return children;
};
