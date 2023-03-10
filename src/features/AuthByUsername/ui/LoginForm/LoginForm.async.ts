import { lazyComponentLoader } from '@/shared/lib';

export const LoginFormAsync = lazyComponentLoader(() => import('./LoginForm'), 'LoginForm');
