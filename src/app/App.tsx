import {
  Suspense,
} from 'react';
import { AppRouter } from './providers';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/SIdebar';
import '@/shared/config/i18n';
import { useInitAuthData } from '@/entities/User';

export function App() {
  const { userInited } = useInitAuthData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div className="content-block">
        <Sidebar />
        {userInited && <AppRouter />}
      </div>
    </Suspense>
  );
}
