import { Navigate, useLocation } from 'react-router-dom';
import { RouterPaths } from '@/shared/config/router';
import { useIsUserAuth } from '@/entities/User';

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
