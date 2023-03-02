import {
  Suspense, useEffect, useLayoutEffect, useState,
} from 'react';
import { useTheme } from '@/shared/providers';
import { clsx } from '@/shared/lib';
import { AppRouter } from './providers';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/SIdebar';
import '@/shared/config/i18n';
import { Modal } from '@/shared/ui';

export function App() {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    // TODO change it!!
    document.body.className = clsx(['app', theme]);
  }, [theme]);

  return (
  // <div className={clsx(['app', theme])}>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div className="content-block">
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  // </div>
  );
}
